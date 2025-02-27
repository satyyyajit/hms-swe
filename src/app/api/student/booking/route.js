import Student from "@/models/UserModels/Student";

import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { parse } from "cookie";
import Fee from "@/models/Functions/Fee";
import Booking from "@/models/Functions/Booking";
import Room from "@/models/Functions/Room";

export const POST = async (req) => {
    try {
        if (!process.env.JWT_SECRET) {
            console.error('JWT_SECRET is not set in environment variables.');
            return new NextResponse(
                JSON.stringify({ success: false, message: 'Server configuration error.' }),
                { status: 500 }
            );
        }

        const cookieHeader = req.headers.get('cookie');
        if (!cookieHeader) {
            return new NextResponse(
                JSON.stringify({ success: false, message: 'No cookie found.' }),
                { status: 401 }
            );
        }

        const token = cookieHeader
            .split('; ')
            .find(row => row.startsWith('token='))
            ?.split('=')[1];

        if (!token) {
            return new NextResponse(
                JSON.stringify({ success: false, message: 'Token not found in cookie.' }),
                { status: 401 }
            );
        }

        // Verify the token
        let decoded;
        try {
            decoded = jwt.verify(token, process.env.JWT_SECRET);
        } catch (err) {
            return new NextResponse(
                JSON.stringify({ success: false, message: 'Invalid or expired token.' }),
                { status: 401 }
            );
        }

        const studentId = decoded.studentId;

        const { preferredRoom, bedType, messType, email, gender } = await req.json();
        console.log('Room:', room);

        if (!preferredRoom || !bedType || !messType || !email || (bedType !== 2 && bedType !== 4) ||   (messType !== 'veg' && messType !== 'non-veg')) {
            return new NextResponse(
                JSON.stringify({ success: false, message: 'Invalid data.' }),
                { status: 400 }
            );
        }

        await connectDb();

        const student = await Student
            .findOne({ studentId, email });

        if (!student || student.studentId !== studentId) {
            return new NextResponse(
                JSON.stringify({ success: false, message: 'Student not found.' }),
                { status: 404 }
            );
        }

        const floor = preferredRoom[0];

        const room = await Room.findOne({ roomNumber: preferredRoom, floor, roomType: bedType });

        if (!room) {
            return new NextResponse(
                JSON.stringify({ success: false, message: 'Room not found.' }),
                { status: 404 }
            );
        }

        const createdBooking = await Booking.create({
            studentId,
            roomNumber: preferredRoom,
            floor,
            bedType,
            messType,
        });







    }
    catch (err) {
        return new NextResponse(
            JSON.stringify({ success: false, message: 'Server error.' }),
            { status: 500 }
        );
    }
}


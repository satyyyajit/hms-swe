import connectDb from "@/lib/db";
import Gym from "@/models/Functions/Gym";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { parse } from "cookie";
import Fee from "@/models/Functions/Fee";
import Student from "@/models/UserModels/Student";
import mongoose from "mongoose";

export const POST = async (req) => {
    const session = await mongoose.startSession();
    session.startTransaction();
    try {
        await connectDb();

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

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const studentId = decoded.studentId;

        if (!studentId) {
            return NextResponse.json(
                { error: "Unauthorized: Invalid token" },
                { status: 401 }
            );
        }

        const existStudent = await Gym.findOne({ studentId });
        const student = await Student.findOne({ studentId });

        if (existStudent) {
            return NextResponse.json(
                { error: "Gym subscription already exists" },
                { status: 400 }
            );
        }

        const occupiedNumber = await Gym.countDocuments() + 1;
        if (occupiedNumber > 20) {
            return NextResponse.json(
                { error: "Gym is full, Sorry!" },
                { status: 409 }
            );
        }

        const expiryDate = new Date();
        expiryDate.setFullYear(expiryDate.getFullYear() + 1);

        const gymFee = new Fee({
            studentId,
            type: "GymFee",
            amount: 1000,
            status: "pending",
        });

        const createGym = new Gym({
            room: "G07",
            occupiedNumber: 1,
            maxCapacity: 20,
            equipment: "Dumbbells, Treadmill, Bench Press, Squat Rack, Pull-up Bar",
            studentId,
            price: 1000,
            active: false,
            subscriptionExpiry: expiryDate
        });

        await Student.findOneAndUpdate(
            { studentId },
            {
                gym: createGym._id,
                $push: { fees: gymFee._id }
            },
            { session }
        );

        await gymFee.save({ session });
        await createGym.save({ session });

        await session.commitTransaction();
        session.endSession();

        return NextResponse.json(
            { success: true, message: "Gym subscription created successfully", createGym, student },
            { status: 200 }
        );
    } catch (err) {
        await session.abortTransaction();
        session.endSession();
        console.error("Error in POST /api/gym:", err);

        if (err.name === "JsonWebTokenError" || err.name === "TokenExpiredError") {
            return NextResponse.json(
                { error: "Unauthorized: Invalid or expired token" },
                { status: 401 }
            );
        }

        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
};

export const GET = async (req) => {
    try {
        await connectDb();

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

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const studentId = decoded.studentId;

        if (!studentId) {
            return NextResponse.json(
                { error: "Unauthorized: Invalid token" },
                { status: 401 }
            );
        }

        const existingSubscription = await Gym.findOne({ studentId });
        if (!existingSubscription) {
            return NextResponse.json(
                { error: "No gym subscription found" },
                { status: 404 }
            );
        }

        const student = await Student.findOne({ studentId });

        return NextResponse.json(
            { existingSubscription, student },
            { status: 200 }
        );
    } catch (err) {
        console.error("Error in GET /api/gym:", err);

        if (err.name === "JsonWebTokenError" || err.name === "TokenExpiredError") {
            return NextResponse.json(
                { error: "Unauthorized: Invalid or expired token" },
                { status: 401 }
            );
        }

        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
};
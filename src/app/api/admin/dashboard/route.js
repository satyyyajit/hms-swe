import connectDb from "@/lib/db";
import Admin from "@/models/UserModels/Admin";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function GET(req) {
    try {
        await connectDb();

        // Check if the cookie exists
        const cookieHeader = req.headers.get('cookie');
        if (!cookieHeader) {
            return new NextResponse(
                JSON.stringify({ success: false, message: 'No cookie found.' }),
                { status: 401 }
            );
        }


        // Extract the token from the cookie
        const token = cookieHeader
            .split('; ')
            .find(row => row.startsWith('token='))
            ?.split('=')[1];

        console.log('Token:', token);    
        if (!token) {
            return new NextResponse(
                JSON.stringify({ success: false, message: 'Token not found in cookie.' }),
                { status: 401 }
            );
        }

        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log('Decoded:', decoded);
        console.log('Admin ID:', decoded.empId);
        // Fetch the student details
        const admin = await Admin.findOne({ _id: decoded.id }).select('-password'); // Exclude password
        if (!admin) {
            return new NextResponse(
                JSON.stringify({ success: false, message: 'Admin not found.' }),
                { status: 404 }
            );
        }



        // Return the student details
        return new NextResponse(
            JSON.stringify({ success: true, admin }),
            { status: 200 }
        );

    } catch (err) {
        console.error('Error in GET /api/admin:', err);

        // Handle JWT verification errors
        if (err.name === 'JsonWebTokenError') {
            return new NextResponse(
                JSON.stringify({ success: false, message: 'Invalid token.' }),
                { status: 401 }
            );
        }

        // Handle other errors
        return new NextResponse(
            JSON.stringify({ success: false, message: 'Internal server error.' }),
            { status: 500 }
        );
    }
}
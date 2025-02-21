import Student from '@models/UserModels/Student';
import connectDb from '@lib/db';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { NextResponse } from 'next/server';
import { serialize } from 'cookie';

export async function POST(req) {
    await connectDb();

    try{
        const body = await req.json();
        const {studentId, password} = body;

        if(!studentId || !password){
            return new NextResponse(
                JSON.stringify({success: false, message: 'Student ID and password are required.'}),
                {status: 400}
            );
        }

        const student = await Student.findOne({studentId});
        if(!student){
            return new NextResponse(
                JSON.stringify({success: false, message: 'Invalid credentials.'}),
                {status: 400}
            );
        }

        const isMatch = await bcrypt.compare(password, student.password);

        if(!isMatch){
            return new NextResponse(
                JSON.stringify({success: false, message: 'Invalid credentials.'}),
                {status: 400}
            );
        }

        const token = jwt.sign({
            id: student._id,
            role: student.role
        }, process.env.JWT_SECRET, {
            expiresIn: '1h'
        });

        const cookie = serialize('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 60 * 60,
        });

        const response = new NextResponse(
            JSON.stringify({success: true, message: 'Login successful.'}),
            {status: 200, headers: {'Set-Cookie': cookie}}
        );

        response.headers.set('Set-Cookie', cookie);
        return response;
    }
    catch(err){
        return new NextResponse(
            JSON.stringify({success: false, message: err.message}),
            {status: 500}
        );
    }
};


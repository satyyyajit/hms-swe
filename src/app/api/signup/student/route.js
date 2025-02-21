import connectDb from '@/lib/db';
import Student from '@/models/UserModels/Student';
import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';

export async function POST(req) {
    await connectDb();
    try {
        const body = await req.json();
        const { name, studentId, year, email, password, dob, address, role, phoneNumber, parentPhoneNumber, gender, } = body;

        const isStudentExist = await Student.findOne({ $or: [{ email }, { studentId }] });
        if (isStudentExist) {
            return new NextResponse(JSON.stringify({ success: false, message: 'Student with this email or student ID already exists.' }), { status: 400 });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const createStudent = new Student({
            name,
            studentId,
            year,
            email,
            password: hashedPassword,
            dob,
            phoneNumber,
            parentPhoneNumber,
            address,
            role,
        });

        await createStudent.save();

        return new NextResponse(JSON.stringify({ success: true, message: 'Student registered successfully.' }), { status: 201 });
        
    }
    catch (error) {
        return new NextResponse(JSON.stringify({ success: false, message: error.message }), { status: 500 });
    }

};

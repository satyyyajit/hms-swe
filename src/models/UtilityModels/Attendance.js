import mongoose from "mongoose";

const attendanceSchema = new mongoose.Schema({
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student',
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        enum: ['Present', 'Absent', 'Leave'],
        required: true
    }
}, { timestamps: true });


module.exports = mongoose.models.Attendance || mongoose.model('Attendance', attendanceSchema);
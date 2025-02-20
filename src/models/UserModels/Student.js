import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    studentId: {
        type: String,
        required: true,
        unique: true
    },
    year: {
        type: Number,
        required: true
    },
    dob: {
        type: Date,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },

    parentPhoneNumber: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Other'],
        required: true
    },
    room: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Room'
    },
    hostelBlock: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'HostelBlock'
    },
    messType: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Mess'
    },
    gym: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Gym'
    },
    payments: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Fee'
    },
    complaints: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Complaints'
    }],
    leaves: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Leaves'
    }],
    feedback: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Feedback'
    }],
    role: {
        type: String,
        default: 'student'
    }
}, { timestamps: true });

// Proper Export Statement
module.exports = mongoose.models.Student || mongoose.model('Student', studentSchema);

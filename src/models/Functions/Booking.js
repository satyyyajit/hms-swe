import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
    room: {
        type: String,
        required: true,
        trim: true,
        ref: 'Room',
        unique: true
    },
    roomId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Room'
    },
    roomType:{
        type: Number,
        required: true,
        enum: [2,4]
    },
    messType:{
        type: String,
        required: true,
        enum: ['veg','non-veg']
    },
    email:{
        type: String,
        required: true,
        ref: 'Student',
        unique: true
    },
    studentId: {
        type: String,
        ref: 'Student',
        required: true,
        trim: true,
        unique: true

    },
    bookingDate: {
        type: Date,
        default: Date.now,
    },
    status: {
        type: String,
        enum: ['approved','pending' , 'rejected'],
        default: 'pending'
    },
    approvedBy: {
        type: String,
        ref: 'Admin'
    },
    approvalDate: {
        type: Date,
        required: true,
        default: null
    },
}, { timestamps: true });

const Booking = mongoose.models.Booking || mongoose.model('Booking', bookingSchema);

export default Booking
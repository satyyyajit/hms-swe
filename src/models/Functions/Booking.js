const bookingSchema = new mongoose.Schema({
    room: {
        type: String,
        required: true,
        trim: true 
    },
    studentId: {
        type: String,
        ref: 'Student',
        required: true
    },
    bookingDate: {
        type: Date,
        default: Date.now,
    },
    checkInDate: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        enum: ['Approved','Pending' , 'Rejected'],
        default: 'Pending'
    },
    approvedBy: {
        type: String,
        ref: 'Admin'
    },
}, { timestamps: true });
const feeSchema = new mongoose.Schema({
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student',
        required: true
    },
    type: {
        type: String,
        enum: ['HostelFee', 'GymFee', 'Fine', 'Other'],
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    paymentDate: {
        type: Date
    },
    status: {
        type: String,
        enum: ['Pending', 'Paid'],
        default: 'Pending'
    },
    dueDate: {
        type: Date,
        required: true
    }
}, { timestamps: true });
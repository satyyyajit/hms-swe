import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ComplaintSchema = new Schema({
    studentId: {
        type: String,
        required: true,
        ref: 'Student'
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    type: {
        type: Number,
        enum: [0, 1, 2], // 0 - mess, 1 - room, 2 - facility
        default: 0
    },
    status: {
        type: Number,
        enum: [0, 1, 2], // 0 - pending, 1 - in progress, 2 - resolved
        default: 0
    },
}, { timestamps: true });

module.exports = mongoose.models.Complaint || mongoose.model('Complaint', ComplaintSchema);
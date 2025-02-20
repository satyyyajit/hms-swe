import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema({
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student',
        required: true
    },
    feedback_description: {
        type: String,
        required: true
    },
    feedbackType: {
        type: String,
        enum: ['Mess', 'Gym', 'Hostel', 'Other'],
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.models.Feedback || mongoose.model('Feedback', feedbackSchema);
import mongoose from "mongoose";

const noticeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },

    description: {
        type: String,
        required: true,
    },

    date: {
        type: Date,
        default: Date.now,
    },

    adminName: {
        type: String,
        ref: "Admin",
        required: true,
    },
});

const Notice = mongoose.models.Notice || mongoose.model("Notice", noticeSchema);
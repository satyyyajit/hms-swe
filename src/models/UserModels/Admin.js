import mongoose from 'mongoose';

const AdminSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    empId:{
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        required: true
    },
    contact: {
        type: Number,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    role: {
        type: String,
        default: 'admin'
    },
    hostelBlock: {
        type: String,
        required: true
    },
    

});

const Admin = mongoose.models.Admin || mongoose.model('Admin', AdminSchema);

module.exports = Admin;
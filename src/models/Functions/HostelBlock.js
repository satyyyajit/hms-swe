const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const HostelBlockSchema = new Schema({
    blockName: {
        type: String,
        required: true
    },
}, { timestamps: true
});

module.exports = mongoose.model('HostelBlock', HostelBlockSchema);
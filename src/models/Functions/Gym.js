const gymSchema = new mongoose.Schema({
    room: {
        type: String,
        required: true
    },
    occupiedNumber: {
        type: Number,
        default: 0
    },
    maxCapacity: {
        type: Number,
        default: 20
    },
    equipment: {
        type: String,
        required: true,
        default: "Dumbbells, Treadmill, Bench Press, Squat Rack, Pull-up Bar"
    },
    slot: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student'
    }]
}, { timestamps: true });
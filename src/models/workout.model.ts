import mongoose from 'mongoose';

const workoutSchema = new mongoose.Schema({
    dateTime: {
        type: Date,
        required: true
    },
    location: {
        type: String,
    },
    type: {
        type: String
    },
    joinLimit: {
        type: Number,
        default: 0
    },
    visible: {
        type: Boolean,
        default: true,
    },
    deleted: {
        type: Boolean,
        default: false
    },
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    joiners: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }]
}, {
    timestamps: true,
});

export const Workout = mongoose.model('Workout', workoutSchema);
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const workoutSchema = new mongoose_1.default.Schema({
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
    creator: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'User'
    },
    joiners: [{
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: 'User'
        }]
}, {
    timestamps: true,
});
exports.Workout = mongoose_1.default.model('Workout', workoutSchema);
// module.exports = Workout;
//# sourceMappingURL=workout.model.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const workoutController = __importStar(require("../controllers/workout.controller"));
exports.workoutRouter = express_1.default.Router();
exports.workoutRouter.route('/:id')
    .get(workoutController.getWorkoutById)
    .patch(workoutController.updateWorkoutPartial)
    .put(workoutController.updateWorkoutFull)
    .delete(workoutController.deleteWorkout);
exports.workoutRouter.route('')
    .get(workoutController.getWorkouts)
    .post(workoutController.createWorkout);
//# sourceMappingURL=workout.router.js.map
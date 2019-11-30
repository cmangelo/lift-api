"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const workout_model_1 = require("../models/workout.model");
exports.getWorkoutById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const workout = yield workout_model_1.Workout.findById(id);
        res.send(workout);
    }
    catch (_a) {
        res.status(404).send();
    }
});
exports.getWorkouts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const workouts = yield workout_model_1.Workout.find();
        res.send(workouts);
    }
    catch (_b) {
        res.status(404).send();
    }
});
exports.createWorkout = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    try {
        const workout = new workout_model_1.Workout({
            dateTime: body.dateTime,
            location: body.location,
            type: body.type,
            joinLimit: body.joinLimit,
            visible: body.visible
        });
        yield workout.save();
        res.send(workout);
    }
    catch (_c) {
        res.status(400).send();
    }
});
exports.updateWorkoutPartial = (req, res) => {
    res.send('updated workout partial');
};
exports.updateWorkoutFull = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const body = req.body;
    try {
        const workout = yield workout_model_1.Workout.findByIdAndUpdate(id, {
            dateTime: body.dateTime,
            location: body.location,
            type: body.type,
            joinLimit: body.joinLimit,
            visible: body.visible
        }, {
            new: true
        });
        res.send(workout);
    }
    catch (_d) {
        res.status(400).send();
    }
});
exports.deleteWorkout = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        yield workout_model_1.Workout.findByIdAndUpdate(id, {
            deleted: true
        });
        res.send();
    }
    catch (_e) {
        res.status(404).send();
    }
});
//# sourceMappingURL=workout.controller.js.map
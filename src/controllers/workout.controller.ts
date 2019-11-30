import express from 'express';

import { WorkoutRequest } from '../interfaces/workout-req.interface';
import { Workout } from '../models/workout.model';

export const getWorkoutById = async (req: express.Request, res: express.Response) => {
    try {
        const id = req.params.id;
        const workout = await Workout.findById(id);
        res.send(workout);
    } catch {
        res.status(404).send()
    }
}

export const getWorkouts = async (req: express.Request, res: express.Response) => {
    try {
        const workouts = await Workout.find();
        res.send(workouts);
    } catch {
        res.status(404).send();
    }
}

export const createWorkout = async (req: express.Request, res: express.Response) => {
    const body: WorkoutRequest = req.body;
    try {
        const workout = new Workout({
            dateTime: body.dateTime,
            location: body.location,
            type: body.type,
            joinLimit: body.joinLimit,
            visible: body.visible
        });
        await workout.save();

        res.send(workout);
    } catch {
        res.status(400).send();
    }

}

export const updateWorkoutPartial = (req: express.Request, res: express.Response) => {
    const id = req.params.id;
    const body = req.body;
    const updates = Object.keys(body);
    const allowedUpdates = ['dateTime', 'location', 'type', 'joinLimit', 'visible'];
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update));

    if (!isValidOperation) {
        return res.status(400).send();
    }

    try {
        const workout = Workout.findByIdAndUpdate(id, body, {
            new: true
        });

        if (!workout) {
            res.status(404).send();
        }

        res.send(workout);
    } catch {
        res.status(400).send();
    }
}

export const updateWorkoutFull = async (req: express.Request, res: express.Response) => {
    const id = req.params.id;
    const body: WorkoutRequest = req.body;
    try {
        const workout = await Workout.findByIdAndUpdate(id, {
            dateTime: body.dateTime,
            location: body.location,
            type: body.type,
            joinLimit: body.joinLimit,
            visible: body.visible
        }, {
            new: true
        });

        if (!workout) {
            res.status(404).send();
        }
        res.send(workout);
    } catch {
        res.status(400).send();
    }
}

export const deleteWorkout = async (req: express.Request, res: express.Response) => {
    try {
        const id = req.params.id;
        await Workout.findByIdAndUpdate(id, {
            deleted: true
        });
        res.send();
    } catch {
        res.status(404).send();
    }
}
import express from 'express';

export const getWorkoutById = (req: express.Request, res: express.Response) => {
    res.send('workout by id');
}

export const getWorkouts = (req: express.Request, res: express.Response) => {
    res.send('workouts');
}

export const createWorkout = (req: express.Request, res: express.Response) => {
    res.send('new workout');
}

export const updateWorkout = (req: express.Request, res: express.Response) => {
    res.send('updated workout');
}
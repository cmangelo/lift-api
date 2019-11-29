import express from 'express';

import * as workoutController from '../controllers/workout.controller';

export const workoutRouter = express.Router();

workoutRouter.get('/:id', workoutController.getWorkoutById);
workoutRouter.get('', workoutController.getWorkouts);
workoutRouter.post('', workoutController.createWorkout);
workoutRouter.put('/:id', workoutController.updateWorkout);
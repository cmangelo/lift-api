import express from 'express';

import * as workoutController from '../controllers/workout.controller';

export const workoutRouter = express.Router();

workoutRouter.route('/:id')
    .get(workoutController.getWorkoutById)
    .patch(workoutController.updateWorkoutPartial)
    .put(workoutController.updateWorkoutFull)
    .delete(workoutController.deleteWorkout);

workoutRouter.route('')
    .get(workoutController.getWorkouts)
    .post(workoutController.createWorkout);

// workoutRouter.get('/:id', workoutController.getWorkoutById);
// workoutRouter.patch('/:id', workoutController.updateWorkoutPartial);
// workoutRouter.put('/:id', workoutController.updateWorkoutFull);
// workoutRouter.delete('/:id', workoutController.deleteWorkout);
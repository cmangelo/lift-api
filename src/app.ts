import express from 'express';

import { userRouter } from './routers/user.router';
import { workoutRouter } from './routers/workout.router';

// require('./db/mongoose');

const app = express();
app.use(express.json());


app.use('/users', userRouter);
app.use('/workouts', workoutRouter);


const port = 3000;
app.listen(port, err => {
    if (err) {
        return console.error(err);
    }
    return console.log(`server is listening on ${port}`);
});
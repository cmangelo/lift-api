"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_router_1 = require("./routers/user.router");
const workout_router_1 = require("./routers/workout.router");
// require('./db/mongoose');
const app = express_1.default();
app.use(express_1.default.json());
app.use('/users', user_router_1.userRouter);
app.use('/workouts', workout_router_1.workoutRouter);
const port = 3000;
app.listen(port, err => {
    if (err) {
        return console.error(err);
    }
    return console.log(`server is listening on ${port}`);
});
//# sourceMappingURL=app.js.map
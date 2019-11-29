import express from 'express';

import * as userController from '../controllers/user.controller';

export const userRouter = express.Router();

userRouter.get('', userController.createUser)
import express from 'express';
import jsonwebtoken from 'jsonwebtoken';
import mongoose from 'mongoose';

import { User } from '../models/user.model';

const auth = async (req: express.Request & { user: mongoose.Document, token: string }, res: express.Response, next: express.NextFunction) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '');
        const decoded = jsonwebtoken.verify(token, 'lift-api') as any;
        const user = await User.findOne({ _id: decoded._id, 'tokens.token': token });
        if (!user) {
            throw new Error();
        }
        req.user = user;
        req.token = token;
        next();
    } catch (err) {
        res.status(401).send('Please authenticate');
    }
}

module.exports = auth;
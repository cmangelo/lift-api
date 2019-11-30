// const mongoose = require('mongoose');
import mongoose from 'mongoose';

export const connect = () => mongoose.connect('mongodb://127.0.0.1:27017/lift-api', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});
import express from 'express';

export const createUser = (req: express.Request, res: express.Response) => {
    res.send('new user')
}
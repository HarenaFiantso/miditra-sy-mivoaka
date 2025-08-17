import express from 'express';

import { login, register, whoami } from '@/controllers/auth.controller';
import { authMiddleware } from '@/middlewares/auth.middleware';

const authRoute = express.Router();

authRoute.post('/login', login);
authRoute.post('/register', register);
authRoute.get('/whoami', authMiddleware, whoami);

export default authRoute;

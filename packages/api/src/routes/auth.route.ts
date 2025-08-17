import express from 'express';

import { login, register, whoami } from '@/controllers/auth.controller';

const authRoute = express.Router();

authRoute.post('/login', login);
authRoute.post('/register', register);
authRoute.get('/whoami', whoami);

export default authRoute;

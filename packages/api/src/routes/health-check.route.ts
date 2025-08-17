import express from 'express';

const healthCheckRoute = express.Router();

healthCheckRoute.get('/hello', (_req, res) => {
  res.json({ message: 'Hello World' });
});

healthCheckRoute.get('/ping', (_req, res) => {
  res.json({ message: 'Pong' });
});

export default healthCheckRoute;

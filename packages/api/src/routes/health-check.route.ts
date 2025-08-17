import express from 'express';

const healthCheckRoute = express.Router();

healthCheckRoute.get('/hello', (req, res) => {
  res.json({ message: 'Hello World' });
});

healthCheckRoute.get('/ping', (req, res) => {
  res.json({ message: 'Pong' });
});

export default healthCheckRoute;

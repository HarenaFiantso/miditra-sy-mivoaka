import express, { type Application, type Request, type Response } from 'express';

export function createApp(): Application {
  const app = express();

  app.get('/health', (_req: Request, res: Response) => {
    res.json({ status: 'ok', version: '0.1.0' });
  });

  return app;
}

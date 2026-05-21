import cors from 'cors';
import express, { type Application, type Request, type Response } from 'express';
import helmet from 'helmet';
import morgan from 'morgan';

import { env } from '../config/env';
import { logger } from '../logger';

export function createApp(): Application {
  const app = express();

  app.use(helmet({ contentSecurityPolicy: false }));
  app.use(cors({ origin: env.CORS_ORIGINS, credentials: true }));
  app.use(express.json());
  app.use(
    morgan('combined', {
      stream: { write: (msg) => logger.http(msg.trim()) },
      skip: () => env.NODE_ENV === 'test',
    }),
  );

  app.get('/health', (_req: Request, res: Response) => {
    res.json({ status: 'ok', version: '0.1.0' });
  });

  return app;
}

import { env } from '@shared/infra/config/env';
import { createApp } from '@shared/infra/http/app';
import http from 'node:http';

async function bootstrap(): Promise<void> {
  const httpServer = http.createServer();
  const app = createApp();

  httpServer.on('request', app);

  httpServer.listen(env.PORT, () => {
    console.log(`Miditra sy Mivoaka API running on port ${env.PORT} [${env.NODE_ENV}]`);
    console.log(`http://localhost:${env.PORT}/api/${env.API_VERSION}/health`);
  });

  const shutdown = async (signal: string) => {
    console.log(`${signal} received — shutting down gracefully…`);
    httpServer.close(async () => {
      console.log('Shutdown complete.');
      process.exit(0);
    });
  };

  process.on('SIGTERM', () => shutdown('SIGTERM'));
  process.on('SIGINT', () => shutdown('SIGINT'));
}

bootstrap().catch((err) => {
  console.error('Fatal startup error', { err });
  process.exit(1);
});

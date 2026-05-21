import { createApp } from '@shared/infra/http/app';
import http from 'node:http';

async function bootstrap(): Promise<void> {
  const httpServer = http.createServer();
  const app = createApp();

  const PORT = 3000;
  const NODE_ENV = 'development';
  const API_VERSION = 'v1';

  httpServer.on('request', app);

  httpServer.listen(PORT, () => {
    console.log(`Miditra sy Mivoaka API running on port ${PORT} [${NODE_ENV}]`);
    console.log(`http://localhost:${PORT}/api/${API_VERSION}/health`);
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

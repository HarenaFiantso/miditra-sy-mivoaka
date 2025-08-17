import express from 'express';

import { healthCheckRoute } from './routes';

const app = express();
const PORT = process.env.PORT ?? '8080';

app.use('/api/v1/health-check', healthCheckRoute);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

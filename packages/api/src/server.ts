import express from 'express';
import cors from 'cors';

import { authRoute, healthCheckRoute } from './routes';

const app = express();
const PORT = process.env.PORT ?? '8080';

app.use(cors());
app.use(express.json());

app.use('/api/v1/health-check', healthCheckRoute);
app.use('/api/v1', authRoute);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

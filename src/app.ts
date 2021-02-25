import 'reflect-metadata';
import 'dotenv/config';

import express from 'express';

import routes from './routes';

import createConnection from './database';

const app = express();

createConnection();

app.use(express.json());
app.use(routes);

export default app;

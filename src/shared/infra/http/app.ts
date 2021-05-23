import 'reflect-metadata';
import 'express-async-errors';
import 'dotenv/config';

import cors from 'cors';
import pinoHttp from 'pino-http';
import logger from '../../../logger';
import router from './routes';
import express, { NextFunction, Request, Response } from 'express';

import '@shared/container';
import { AppError } from '@shared/errors/AppError';
import createConnection from '@shared/infra/typeorm';

createConnection();
const app = express();

app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(express.json());
app.use(pinoHttp(logger));

app.use(router);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message,
      });
    }

    return response.status(500).json({
      status: 'error',
      message: `Internal server error - ${err.message}`,
    });
  },
);

export default app;

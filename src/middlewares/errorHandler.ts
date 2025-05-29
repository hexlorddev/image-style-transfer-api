import { Request, Response, NextFunction } from 'express';
import { HttpError } from '../utils/errors/HttpError';

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error('Error caught by error handler:', err);

  if (err instanceof HttpError) {
    res.status(err.status).json({ error: err.message });
  } else {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

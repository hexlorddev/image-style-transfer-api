import { Request, Response, NextFunction } from 'express';
import { HttpError } from './HttpError';

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);

  if (err instanceof HttpError) {
    res.status(err.statusCode).send({ message: err.message });
  } else {
    // Generic error handling
    res.status(500).send({ message: 'Something went wrong!' });
  }
};

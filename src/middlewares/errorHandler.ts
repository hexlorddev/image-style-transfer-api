import { Request, Response, NextFunction } from 'express';
import { HttpError } from '../utils/errors/HttpError';
import { logError } from '../utils/errors/errorHandler';

export const globalErrorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  logError(err);

  if (err instanceof HttpError) {
    res.status(err.status).json({
      status: 'error',
      message: err.message,
      errors: err.errors,
    });
  } else {
    res.status(500).json({
      status: 'error',
      message: 'Internal Server Error',
    });
  }

  next(err);
};

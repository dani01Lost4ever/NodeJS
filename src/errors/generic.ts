import { Response, Request, NextFunction } from 'express';
import * as errorCodes from './errorCode.json';

export class CustomError extends Error {
  constructor(name: string, message: string) {
    super();
    this.name = name;
    this.message = message;
  }
}

export const errorHandler = (statusCode: number, req: Request, res: Response, next: NextFunction) => {
  const errorDetails = errorCodes[statusCode.toString()] || { message: 'Internal Server Error' };
  console.log("ERROR:", statusCode, errorDetails);
  res.status(statusCode);
  res.json({
    errorCode: statusCode,
    error: errorDetails.message,
  });
};
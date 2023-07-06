import { plainToClass } from "class-transformer";
import { NextFunction, Request, Response } from "express";
import { validate as classValidate } from 'class-validator';
import { ValidationError } from "../errors/validationError";

export function validate<T extends object>(type: (new() => T), origin: 'body' | 'query' = 'body') {
  return async (req: Request, res: Response, next: NextFunction) => {
    const data = plainToClass(type, req[origin]);
    const errors = await classValidate(data);
    
    if (errors.length) {
      next(new ValidationError(errors));
    } else {
      next();
    }
  }
}
import { ValidationError as OriginalValidationError } from "class-validator";
import { NextFunction, Request, Response } from "express";

export class ValidationError extends Error {

  constructor(public originalErrors: OriginalValidationError[]) {
    super();
    this.name = 'ValidationError';
    this.message = originalErrors
                      .map(err => Object.values(err.constraints as any))
                      .flat()
                      .join('; ');
  }
}

export const validationErrorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof ValidationError) {
    res.status(400);
    res.json({
      name: err.name,
      message: err.message,
      details: err.originalErrors.map(err => ({
        property: err.property,
        constraints: err.constraints,
        value: err.value
      }))
    });

    // err.originalErrors.map(err => {
    //   return {
    //     property: err.property,
    //     constraints: err.constraints,
    //     value: err.value
    //   }
    // })
  } else {
    next(err);
  }
}
  

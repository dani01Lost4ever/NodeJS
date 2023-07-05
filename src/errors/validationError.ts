import { Response, Request, NextFunction } from 'express';
import { ValidationError } from 'class-validator';

export class CustomError extends Error {
  constructor(name: string, message: string) {
    super();
    this.name = 'ValidationError';
    this.message = message;
  }
}

export const validationErrorHandler = (errors: ValidationError[], req: Request, res: Response, next: NextFunction) => {
    const errorDetails = errors.map((error) => {
      const { property, constraints, value } = error;
      const mappedConstraints: Record<string, string> = {};
      for (const key in constraints) {
        mappedConstraints[key] = constraints[key];
      }
      return {
        property,
        constraints: mappedConstraints,
        value,
      };
    });

    const errorMessages = errorDetails.map((error) => Object.values(error.constraints)).flat();
    const errorMessage = errorMessages.join('; ');
  
    //console.log('Validation Error:', errorDetails);
  
    res.status(400);
    res.json({
      name: 'ValidationError',
      message: errorMessage,
      details: errorDetails,
    });
  };
  
  
  

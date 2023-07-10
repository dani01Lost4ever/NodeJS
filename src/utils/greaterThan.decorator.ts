import { ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';

@ValidatorConstraint({ name: 'minMaxPrice', async: false })
export class MinMaxPriceValidator implements ValidatorConstraintInterface {
  validate(value: any, args: ValidationArguments) {
    let minPrice = args.object['minPrice'];
    const maxPrice = value;
    if(minPrice==undefined)minPrice = 0;
    // Check if maxPrice is greater than minPrice
    return maxPrice >= minPrice;
  }

  defaultMessage(args: ValidationArguments) {
    return `The maxPrice must be greater than the minPrice`;
  }
}
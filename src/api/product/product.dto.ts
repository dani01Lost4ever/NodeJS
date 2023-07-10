import { IsNumber, Min, IsOptional, IsString, Validate } from "class-validator";
import {Type} from 'class-transformer';
import 'reflect-metadata';
import { MinMaxPriceValidator } from '../../utils/greaterThan.decorator';
export class QueryProductDTO{

    @IsOptional()
    @IsString()
    name:string;

    @IsOptional()
    @IsNumber()
    @Min(0)
    @Type(()=>Number)
    minPrice:number;

    @IsOptional()
    @IsNumber()
    @Min(0)
    @Type(()=>Number)
    @Validate(MinMaxPriceValidator)
    maxPrice:number;    
}
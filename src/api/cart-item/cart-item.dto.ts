import { IsInt, Min, Max, IsMongoId } from "class-validator";
export class AddCartItemDTO{
    @IsMongoId()
    productId: string;

    @IsInt()
    @Min(1)
    @Max(10)
    quantity: number;
}

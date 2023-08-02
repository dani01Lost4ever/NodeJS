import { IsInt, Min, Max, IsMongoId, IsOptional } from "class-validator";
export class AddCartItemDTO {
  @IsMongoId()
  productId: string;

  @IsInt()
  @Min(1)
  @Max(1000)
  quantity: number;
}
export class UpdateQuantityDTO {
  @IsInt()
  @Min(1)
  @Max(1000)
  quantity: number;
}
//test

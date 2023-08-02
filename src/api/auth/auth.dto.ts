import { IsEmail, IsString, IsUrl, Matches, MinLength } from "class-validator";
import { isString } from "lodash";

export class AddUserDTO {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsUrl()
  picture: string;

  @IsEmail()
  username: string;

  @MinLength(8)
  @Matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d|\W).*$/, {
    message:
      "Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number or special character",
  })
  password: string;
}

export class LoginDTO {
  @IsString()
  username: string;

  @IsString()
  password: string;
}

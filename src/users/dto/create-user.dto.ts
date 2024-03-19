import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, Length } from "class-validator";

export class CreateUserDto {
  @ApiProperty({ example: "user@mail.com", description: "User email" })
  @IsString({ message: "Must be a string" })
  @IsEmail({}, { message: "Incorrect email" })
  readonly email: string;

  @ApiProperty({ example: "password", description: "User password" })
  @IsString({ message: "Must be a string" })
  @Length(6, 16, { message: "Must be between 6 and 16 characters" })
  readonly password: string;
}

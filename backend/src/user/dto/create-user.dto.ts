import {
  IsDateString,
  IsEmail,
  IsNotEmpty,
  IsPhoneNumber,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  readonly name: string;

  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @IsDateString()
  @IsNotEmpty()
  readonly dob: Date;

  @IsNotEmpty()
  @IsPhoneNumber(null)
  readonly phoneNumber: string;
}

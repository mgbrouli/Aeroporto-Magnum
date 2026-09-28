import {IsEmail, IsInt, IsString, Min, } from 'class-validator';

export class CreateEmployeeDto {

  @IsString()
  name: string;

  @IsEmail()
  email: string;


  @IsInt()
  @Min(18)
  age: number;



}

import { IsEmail, IsInt, IsString, IsStrongPassword, Min, IsIn } from 'class-validator';

export const EMPLOYEE_ROLES   =['piloto', 'aeromoca', 'operacional'] as const;
export type EmployeeRole  = typeof EMPLOYEE_ROLES[number];

export class CreateEmployeeDto {

  @IsString({ message: 'O nome deve ser uma string válida.' })
  name: string;

  @IsEmail({}, { message: 'O e-mail informado não é válido.' })
  email: string;

  @IsInt({message: " A idade deve ser um número inteiro."})
  @Min(18, { message: 'O funcionário deve ter pelo menos 18 anos.' })
  age: number;

  @IsIn(EMPLOYEE_ROLES, {
    message: 'O cargo deve ser um dos seguintes: piloto, aeromoca ou operacional',
  })
  role: EmployeeRole;
}

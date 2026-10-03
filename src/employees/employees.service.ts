import { Inject, Injectable, } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto.js';
import { UpdateEmployeeDto } from './dto/update-employee.dto.js';
import { DATABASE_CONNECTION } from '../core/db/database.module.js';
import type { AppDatabase } from '../core/db/database.module.js';
import { employees } from './employees.schema.js';
import { eq } from 'drizzle-orm'
import { AppError } from '../core/error/AppError.js';

@Injectable()
export class EmployeesService {

  constructor(
    @Inject(DATABASE_CONNECTION)
    private readonly database: AppDatabase,
  ) { }

  create(createEmployeeDto: CreateEmployeeDto) {
    return this.database
      .insert(employees)
      .values(createEmployeeDto)
      .returning()
      .get();

  }

  findAll() {
    return this.database
      .select()
      .from(employees)
      .all();
  }

  findOne(id: number) {
    const userExiste = this.database
      .select()
      .from(employees)
      .where(eq(employees.id, id))
      .get();

    if (!userExiste) {
      throw new AppError(404, "Id não existente ou invalido");
    }
    return userExiste;
  }

  update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    const result = this.database
      .update(employees)
      .set(updateEmployeeDto)
      .where(eq(employees.id, id))
      .returning()
      .get();

    if (!result) {
      throw new AppError(404, "Id não existente ou invalido");
    }
    return result;
  }

  remove(id: number) {
    const result = this.database
      .delete(employees)
      .where(eq(employees.id, id))
      .returning()
      .get();

    if (!result) {
      throw new AppError(404, "Id não existente ou invalido");
    }
    return result;
  }
}

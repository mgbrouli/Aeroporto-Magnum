import { Injectable, Inject } from '@nestjs/common';
import { CreateAircraftDto } from './dto/create-aircraft.dto.js';
import { UpdateAircraftDto } from './dto/update-aircraft.dto.js';

import { DATABASE_CONNECTION } from "../core/db/database.module.js";
import type { AppDatabase } from "../core/db/database.module.js";

import { aircraftTable } from "./aircrafts.schema.js";
import { eq } from 'drizzle-orm'
import { AppError } from '../core/error/AppError.js';


@Injectable()
export class AircraftsService {


  constructor(
    @Inject(DATABASE_CONNECTION)
    private readonly database: AppDatabase,
  ) { }

  create(createAircraftDto: CreateAircraftDto) {
    return this.database
      .insert(aircraftTable)
      .values(createAircraftDto)
      .returning()
      .get();

  }

  findAll() {
    return this.database
      .select()
      .from(aircraftTable)
      .all()
  }

  findOne(id: number) {
    const airplaneExist = this.database
      .select()
      .from(aircraftTable)
      .where(eq(aircraftTable.id, id))
      .get();

    if (!aircraftTable) {
      throw new AppError(404, "Id não encontrado ou invalido");
    }
    return aircraftTable;
  }

  update(id: number, updateAircraftDto: UpdateAircraftDto) {
    const result = this.database
      .update(aircraftTable)
      .set(updateAircraftDto)
      .where(eq(aircraftTable.id, id))
      .returning()
      .get();

    if (!result) {
      throw new AppError(404, "Id não encontrado ou invalido");
    }

    return result;

  }

  remove(id: number) {
    const result = this.database
      .delete(aircraftTable)
      .where(eq(aircraftTable.id, id))
      .returning()
      .get()

    if (!result) {
      throw new AppError(404, "Id não encontrado ou invalido");
    }

    return result;
  }
}

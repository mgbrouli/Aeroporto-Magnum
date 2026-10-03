import { PartialType } from '@nestjs/mapped-types';
import { CreateAircraftDto } from './create-aircraft.dto.js';

export class UpdateAircraftDto extends PartialType(CreateAircraftDto) {}

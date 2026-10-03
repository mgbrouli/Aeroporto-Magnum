import { Module } from '@nestjs/common';
import { AircraftsService } from './aircrafts.service.js';
import { AircraftsController } from './aircrafts.controller.js';

@Module({
  controllers: [AircraftsController],
  providers: [AircraftsService],
})
export class AircraftsModule {}

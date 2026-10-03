import { Test, TestingModule } from '@nestjs/testing';
import { AircraftsController } from './aircrafts.controller.js';
import { AircraftsService } from './aircrafts.service.js';

describe('AircraftsController', () => {
  let controller: AircraftsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AircraftsController],
      providers: [AircraftsService],
    }).compile();

    controller = module.get<AircraftsController>(AircraftsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

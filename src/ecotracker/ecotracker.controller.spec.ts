import { Test, TestingModule } from '@nestjs/testing';
import { EcotrackerController } from './ecotracker.controller';
import { EcotrackerService } from './ecotracker.service';

describe('EcotrackerController', () => {
  let controller: EcotrackerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EcotrackerController],
      providers: [EcotrackerService],
    }).compile();

    controller = module.get<EcotrackerController>(EcotrackerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

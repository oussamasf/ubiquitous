import { Test, TestingModule } from '@nestjs/testing';
import { EcotrackerService } from './ecotracker.service';

describe('EcotrackerService', () => {
  let service: EcotrackerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EcotrackerService],
    }).compile();

    service = module.get<EcotrackerService>(EcotrackerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

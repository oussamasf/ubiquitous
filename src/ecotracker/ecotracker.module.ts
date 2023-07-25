import { Module } from '@nestjs/common';
import { EcotrackerService } from './ecotracker.service';
import { EcotrackerController } from './ecotracker.controller';
import { EcoListener } from './listeners/eventListener';

@Module({
  controllers: [EcotrackerController],
  providers: [EcotrackerService, EcoListener],
})
export class EcotrackerModule {}

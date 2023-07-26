import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EcotrackerModule } from './ecotracker/ecotracker.module';
import { EventEmitterModule } from '@nestjs/event-emitter';

@Module({
  imports: [EcotrackerModule, EventEmitterModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

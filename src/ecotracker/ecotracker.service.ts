import { Injectable } from '@nestjs/common';
import { CreateEcotrackerDto } from './dto/create-ecotracker.dto';
import { UpdateEcotrackerDto } from './dto/update-ecotracker.dto';
import { EventEmitter2 } from '@nestjs/event-emitter';

@Injectable()
export class EcotrackerService {
  constructor(private eventEmitter: EventEmitter2) {}

  create(createEcotrackerDto: CreateEcotrackerDto) {
    this.eventEmitter.emit('eco.created', { ecoEvent: 'hello glob' });

    return 'This action adds a new ecotracker';
  }

  findAll() {
    return `This action returns all ecotracker`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ecotracker`;
  }

  update(id: number, updateEcotrackerDto: UpdateEcotrackerDto) {
    return `This action updates a #${id} ecotracker`;
  }

  remove(id: number) {
    return `This action removes a #${id} ecotracker`;
  }
}

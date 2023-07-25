import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';

@Injectable()
export class EcoListener {
  @OnEvent('eco.created')
  handleOrderCreatedEvent(event) {
    // handle and process "OrderCreatedEvent" event
    console.log(event);
  }
}

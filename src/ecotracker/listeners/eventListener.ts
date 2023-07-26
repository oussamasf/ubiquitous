import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';

@Injectable()
export class EcoListener {
  @OnEvent('eco.created')
  handleOrderCreatedEvent(event) {
    // decouple the app using event emitter
    console.log(event);
  }
}

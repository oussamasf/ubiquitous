# Nest.js App with Event Emitter for Decoupling

## Introduction

This Readme provides an overview of a Nest.js application that utilizes an Event Emitter for decoupling components within the app. The purpose of this design pattern is to enhance the maintainability, scalability, and flexibility of the application by reducing tight coupling between different modules.

## Decoupling with Event Emitter

Decoupling is a design principle that aims to reduce the interdependence of different components or modules within an application. Tight coupling can lead to code that is difficult to maintain, modify, and test. To overcome these challenges, developers use various patterns and techniques to achieve loose coupling.

One such technique is using an Event Emitter. In the context of Node.js and Nest.js, an Event Emitter allows different parts of the application to communicate with each other without knowing the exact details of the communication channels or the implementation of the receiving components.

## How to "Event Emitter"?

### Step 1: Create the Event Emitter

```
import { EventEmitter2 } from '@nestjs/event-emitter';

@Injectable()
export class EcotrackerService {
  constructor(private eventEmitter: EventEmitter2) {}
  ....
```

### Step 2: Emit the event within a channel

`this.eventEmitter.emit('eco.created', { ecoEvent: 'hello glob' });`

### Step 3: Listen to Events

```
  @OnEvent('eco.created')
  handleOrderCreatedEvent(event) {
    // decouple the app using event emitter
    console.log(event);
  }
```

### Step 4: Inject Services

Finally, make sure to inject the Listener to targeted module

## Conclusion

you can create a Nest.js application that effectively utilizes an Event Emitter to decouple different modules within the app. This approach enhances maintainability, scalability, and flexibility, making your codebase more robust and easier to manage in the long run.

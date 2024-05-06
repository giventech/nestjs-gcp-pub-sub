import { Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { EventPayload } from './listeners/envent.payload';

@Injectable()
export class AppService {
 constructor(private readonly eventEmitter: EventEmitter2) {}

 async triggerCloudFunction(): Promise<void> {
  // Hardcoded sample payload
  const samplePayload: EventPayload = {
    eventName: 'Sample Event',
    eventDate: new Date('2024-05-10T09:00:00'),
    eventLocation: 'Sample Location',
    eventOrganizer: 'Sample Organizer',
    eventParticipants: ['Participant 1', 'Participant 2'],
    // eventDescription is optional and can be omitted
  };

  await this.eventEmitter.emitAsync('triggerCloudFunction', samplePayload);
}
}

import { OnEvent } from "@nestjs/event-emitter";
import { Injectable } from "@nestjs/common";
import { PubSubService } from "src/services/pubsub/pubsub.service";
import { EventPayload } from "./envent.payload";

@Injectable()
export class TriggerCloudFunctionService {
  constructor(private readonly pubSubService: PubSubService) {}

 @OnEvent('triggerCloudFunction', { promisify: true, async: true })
 async triggerCloudFunction(event_payload: EventPayload) {
    try {
      const topicName = 'your-topic-name';
      this.pubSubService.publishMessage(topicName, event_payload);
    } catch (error) {
      console.log(error);
    }
  }
}

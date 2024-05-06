import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PubSubService } from './services/pubsub/pubsub.service';
import { TriggerCloudFunctionService } from './listeners/trigger-cloud-function.listener';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    TriggerCloudFunctionService,
    PubSubService
    ],
    exports: [AppModule]
})
export class AppModule {}


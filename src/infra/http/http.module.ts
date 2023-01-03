import { Module } from '@nestjs/common';
import { SendNotification } from '@application/useCases/sendNotification';
import { DatabaseModule } from '../database/database.module';
import { CancelNotification } from '@application/useCases/cancelNotification';
import { CountRecipientNotifications } from '@application/useCases/countRecipientNotifications';
import { GetRecipientNotifications } from '@application/useCases/getRecipientNotifications';
import { ReadNotification } from '@application/useCases/readNotification';
import { UnreadNotification } from '@application/useCases/unreadNotification';
import { SendNotificationController } from './controllers/sendNotification.controller';
import { CancelNotificationsController } from './controllers/cancelNotification.controller';
import { CountRecipientNotificationsController } from './controllers/countRecipientNotifications.controller';
import { GetRecipientNotificationsController } from './controllers/getRecipientNotifications.controller';
import { ReadNotificationsController } from './controllers/readNotification.controller';
import { UnreadNotificationsController } from './controllers/unreadNotification.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [
    SendNotificationController,
    CancelNotificationsController,
    CountRecipientNotificationsController,
    GetRecipientNotificationsController,
    ReadNotificationsController,
    UnreadNotificationsController,
  ],
  providers: [
    SendNotification,
    CancelNotification,
    CountRecipientNotifications,
    GetRecipientNotifications,
    ReadNotification,
    UnreadNotification,
  ],
})
export class HttpModule {}

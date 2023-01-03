import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { SendNotification } from '@application/useCases/sendNotification';
import { CreateNotificationBody } from '../dtos/createNotificationBody';
import { NotificationViewModel } from '../viewModels/notificationViewModel';

@Controller('notifications')
export class SendNotificationController {
  constructor(private sendNotification: SendNotification) {}
  @Post()
  async send(
    @Body(new ValidationPipe({ transform: true })) body: CreateNotificationBody,
  ) {
    const { content, category, recipientId } = body;

    const { notification } = await this.sendNotification.execute({
      category,
      content,
      recipientId,
    });

    const response = NotificationViewModel.toHTTP(notification);

    return { notification: response };
  }
}

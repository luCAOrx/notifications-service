import { Controller, Get, Param } from '@nestjs/common';
import { NotificationViewModel } from '../viewModels/notificationViewModel';
import { GetRecipientNotifications } from '@application/useCases/getRecipientNotifications';

@Controller('notifications')
export class GetRecipientNotificationsController {
  constructor(private getRecipientNotifications: GetRecipientNotifications) {}

  @Get('from/:recipientId')
  async getFromRecipient(@Param('recipientId') recipientId: string) {
    const { notifications } = await this.getRecipientNotifications.execute({
      recipientId,
    });

    return {
      notifications: notifications.map(NotificationViewModel.toHTTP),
    };
  }
}

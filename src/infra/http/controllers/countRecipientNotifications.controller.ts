import { Controller, Get, Param } from '@nestjs/common';
import { CountRecipientNotifications } from '@application/useCases/countRecipientNotifications';

@Controller('notifications')
export class CountRecipientNotificationsController {
  constructor(
    private countRecipientNotifications: CountRecipientNotifications,
  ) {}

  @Get('count/from/:recipientId')
  async countFromRecipient(@Param('recipientId') recipientId: string) {
    const { count } = await this.countRecipientNotifications.execute({
      recipientId,
    });

    return {
      count,
    };
  }
}

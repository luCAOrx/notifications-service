import { Controller, Param, Patch } from '@nestjs/common';
import { UnreadNotification } from '@application/useCases/unreadNotification';

@Controller('notifications')
export class UnreadNotificationsController {
  constructor(private unreadNotification: UnreadNotification) {}

  @Patch(':id/unread')
  async unread(@Param('id') id: string) {
    await this.unreadNotification.execute({
      notificationId: id,
    });
  }
}

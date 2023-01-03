import { Controller, Param, Patch } from '@nestjs/common';
import { CancelNotification } from '@application/useCases/cancelNotification';

@Controller('notifications')
export class CancelNotificationsController {
  constructor(private cancelNotification: CancelNotification) {}

  @Patch(':id/cancel')
  async cancel(@Param('id') id: string) {
    await this.cancelNotification.execute({
      notificationId: id,
    });
  }
}

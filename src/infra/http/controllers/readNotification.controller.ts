import { Controller, Param, Patch } from '@nestjs/common';
import { ReadNotification } from '@application/useCases/readNotification';

@Controller('notifications')
export class ReadNotificationsController {
  constructor(private readNotification: ReadNotification) {}

  @Patch(':id/read')
  async read(@Param('id') id: string) {
    await this.readNotification.execute({
      notificationId: id,
    });
  }
}

import {
  Controller,
  HttpException,
  HttpStatus,
  Param,
  Patch,
} from '@nestjs/common';
import { UnreadNotification } from '@application/useCases/unreadNotification';
import { NotificationNotFound } from '@application/useCases/erros/notificationNotFound';

@Controller('notifications')
export class UnreadNotificationsController {
  constructor(private unreadNotification: UnreadNotification) {}

  @Patch(':id/unread')
  async unread(@Param('id') id: string) {
    await this.unreadNotification
      .execute({
        notificationId: id,
      })
      .catch((notificationNotFound: HttpStatus.BAD_REQUEST) => {
        if (notificationNotFound) {
          throw new HttpException(
            {
              statusCode: HttpStatus.BAD_REQUEST,
              message: new NotificationNotFound().message,
              error: 'Bad request',
            },
            HttpStatus.BAD_REQUEST,
          );
        }
      });
  }
}

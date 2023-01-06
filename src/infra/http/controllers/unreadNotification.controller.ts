import {
  Controller,
  HttpException,
  HttpStatus,
  Param,
  Patch,
} from '@nestjs/common';
import { UnreadNotification } from '@application/useCases/unreadNotification';
import { NotificationNotFound } from '@application/useCases/erros/notificationNotFound';
import { ApiTags, ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';
import { apiOperationOptions } from 'docs/infra/http/controllers/unreadNotifications/apiOperation';
import { apiParamOptions } from 'docs/infra/http/controllers/unreadNotifications/apiParam';
import {
  noHaveResponse,
  notificationNotFound,
} from 'docs/infra/http/controllers/apiGlobalResponse';

@Controller('notifications')
@ApiTags('Notification')
export class UnreadNotificationsController {
  constructor(private unreadNotification: UnreadNotification) {}

  @Patch(':id/unread')
  @ApiOperation(apiOperationOptions)
  @ApiParam(apiParamOptions)
  @ApiResponse(noHaveResponse)
  @ApiResponse(notificationNotFound)
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

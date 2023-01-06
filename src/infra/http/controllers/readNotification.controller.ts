import {
  Controller,
  HttpException,
  HttpStatus,
  Param,
  Patch,
} from '@nestjs/common';
import { ReadNotification } from '@application/useCases/readNotification';
import { NotificationNotFound } from '@application/useCases/erros/notificationNotFound';
import { ApiTags, ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';
import { apiOperationOptions } from 'docs/infra/http/controllers/readNotifications/apiOperation';
import { apiParamOptions } from 'docs/infra/http/controllers/readNotifications/apiParam';
import {
  noHaveResponse,
  notificationNotFound,
} from 'docs/infra/http/controllers/apiGlobalResponse';

@ApiTags('Notification')
@Controller('notifications')
export class ReadNotificationsController {
  constructor(private readNotification: ReadNotification) {}

  @Patch(':id/read')
  @ApiOperation(apiOperationOptions)
  @ApiParam(apiParamOptions)
  @ApiResponse(noHaveResponse)
  @ApiResponse(notificationNotFound)
  async read(@Param('id') id: string) {
    await this.readNotification
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

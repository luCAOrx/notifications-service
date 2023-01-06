import {
  Controller,
  HttpException,
  HttpStatus,
  Param,
  Patch,
} from '@nestjs/common';
import { CancelNotification } from '@application/useCases/cancelNotification';
import { NotificationNotFound } from '@application/useCases/erros/notificationNotFound';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { apiOperationOptions } from 'docs/infra/http/controllers/cancelNotification/apiOperation';
import { apiParamOptions } from 'docs/infra/http/controllers/cancelNotification/apiParam';
import {
  notificationNotFound,
  noHaveResponse,
} from 'docs/infra/http/controllers/apiGlobalResponse';

@ApiTags('Notification')
@Controller('notifications')
export class CancelNotificationsController {
  constructor(private cancelNotification: CancelNotification) {}

  @Patch(':id/cancel')
  @ApiOperation(apiOperationOptions)
  @ApiParam(apiParamOptions)
  @ApiResponse(noHaveResponse)
  @ApiResponse(notificationNotFound)
  async cancel(@Param('id') id: string) {
    await this.cancelNotification
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

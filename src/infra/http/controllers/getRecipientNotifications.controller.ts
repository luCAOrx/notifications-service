import { Controller, Get, Param } from '@nestjs/common';
import { NotificationViewModel } from '../viewModels/notificationViewModel';
import { GetRecipientNotifications } from '@application/useCases/getRecipientNotifications';
import { ApiTags, ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';
import { apiOperationOptions } from 'docs/infra/http/controllers/getRecipientNotifications/apiOperation';
import { apiParamOptions } from 'docs/infra/http/controllers/getRecipientNotifications/apiParam';
import { apiResponseOptions } from 'docs/infra/http/controllers/getRecipientNotifications/apiResponse';

@ApiTags('Notification')
@Controller('notifications')
export class GetRecipientNotificationsController {
  constructor(private getRecipientNotifications: GetRecipientNotifications) {}

  @Get('from/:recipientId')
  @ApiOperation(apiOperationOptions)
  @ApiParam(apiParamOptions)
  @ApiResponse(apiResponseOptions)
  async getFromRecipient(@Param('recipientId') recipientId: string) {
    const { notifications } = await this.getRecipientNotifications.execute({
      recipientId,
    });

    return {
      notifications: notifications.map(NotificationViewModel.toHTTP),
    };
  }
}

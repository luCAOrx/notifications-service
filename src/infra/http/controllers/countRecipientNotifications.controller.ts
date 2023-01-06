import { Controller, Get, Param } from '@nestjs/common';
import { CountRecipientNotifications } from '@application/useCases/countRecipientNotifications';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { apiOperationOptions } from 'docs/infra/http/controllers/countRecipientNotifications/apiOperation';
import { apiParamOptions } from 'docs/infra/http/controllers/countRecipientNotifications/apiParam';
import { apiResponseOptions } from 'docs/infra/http/controllers/countRecipientNotifications/apiResponse';

@ApiTags('Notification')
@Controller('notifications')
export class CountRecipientNotificationsController {
  constructor(
    private countRecipientNotifications: CountRecipientNotifications,
  ) {}

  @Get('count/from/:recipientId')
  @ApiOperation(apiOperationOptions)
  @ApiParam(apiParamOptions)
  @ApiResponse(apiResponseOptions)
  async countFromRecipient(@Param('recipientId') recipientId: string) {
    const { count } = await this.countRecipientNotifications.execute({
      recipientId,
    });

    return {
      count,
    };
  }
}

import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { SendNotification } from '@application/useCases/sendNotification';
import { CreateNotificationBody } from '../dtos/createNotificationBody';
import { NotificationViewModel } from '../viewModels/notificationViewModel';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBody,
  ApiExtraModels,
} from '@nestjs/swagger';
import { apiOperationOptions } from 'docs/infra/http/controllers/sendNotification/apiOperation';
import { apiBodyOptions } from 'docs/infra/http/controllers/sendNotification/apiBody';
import {
  createResponseNotification,
  badRequestResponse,
} from 'docs/infra/http/controllers/sendNotification/apiResponse';

@Controller('notifications')
@ApiTags('Notification')
export class SendNotificationController {
  constructor(private sendNotification: SendNotification) {}

  @Post()
  @ApiOperation(apiOperationOptions)
  @ApiExtraModels(CreateNotificationBody)
  @ApiBody(apiBodyOptions)
  @ApiResponse(createResponseNotification)
  @ApiResponse(badRequestResponse)
  async send(
    @Body(new ValidationPipe({ transform: true })) body: CreateNotificationBody,
  ) {
    const { content, category, recipientId } = body;

    const { notification } = await this.sendNotification.execute({
      category,
      content,
      recipientId,
    });

    const response = NotificationViewModel.toHTTP(notification);

    return { notification: response };
  }
}

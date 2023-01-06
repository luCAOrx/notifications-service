import { ApiBodyOptions, getSchemaPath } from '@nestjs/swagger';

import { CreateNotificationBody } from '@infra/http/dtos/createNotificationBody';

export const apiBodyOptions: ApiBodyOptions = {
  required: true,
  schema: {
    $ref: getSchemaPath(CreateNotificationBody),
  },
  examples: {
    notificationRequestBody: {
      value: {
        category: 'example',
        content: 'This is a example',
        recipientId: '66619d76-d30d-4d9c-a72d-b1264bbdf2f4',
      },
    },
  },
};

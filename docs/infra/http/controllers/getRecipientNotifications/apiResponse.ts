import { ApiResponseOptions } from '@nestjs/swagger';

export const apiResponseOptions: ApiResponseOptions = {
  description: 'Detail list of the recipient notifications',
  status: 200,
  content: {
    'application/json': {
      example: {
        notifications: [
          {
            id: '39c45b62-ac56-4429-adee-6fa0cdb2ca2f',
            category: 'example',
            content: 'This is a example',
            recipientId: '66619d76-d30d-4d9c-a72d-b1264bbdf2f4',
          },
        ],
      },
    },
  },
};

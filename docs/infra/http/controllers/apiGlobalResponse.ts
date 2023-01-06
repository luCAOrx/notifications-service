import { ApiResponseOptions } from '@nestjs/swagger';

export const noHaveResponse: ApiResponseOptions = {
  description: 'No have response',
  status: 200,
  content: {
    'application/json': {
      example: {},
    },
  },
};

export const notificationNotFound: ApiResponseOptions = {
  description:
    'If a id no exists, return a error response, with message: Notification not found.',
  status: 400,
  content: {
    'application/json': {
      example: {
        statusCode: 400,
        message: 'Notification not found.',
        error: 'Bad request',
      },
    },
  },
};

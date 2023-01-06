import { ApiResponseOptions } from '@nestjs/swagger';

export const apiResponseOptions: ApiResponseOptions = {
  description: 'Number of the recipient notifications',
  status: 200,
  content: {
    'application/json': {
      example: { count: 1 },
    },
  },
};

import { ApiResponseOptions } from '@nestjs/swagger';

export const createResponseNotification: ApiResponseOptions = {
  description: 'Newly created notification',
  status: 201,
  content: {
    'application/json': {
      example: {
        notification: {
          id: '39c45b62-ac56-4429-adee-6fa0cdb2ca2f',
          category: 'example',
          content: 'This is a example',
          recipientId: '66619d76-d30d-4d9c-a72d-b1264bbdf2f4',
        },
      },
    },
  },
};

export const badRequestResponse: ApiResponseOptions = {
  status: 400,
  content: {
    'application/json': {
      examples: {
        contentEmptyFieldValidationError: {
          description: 'Content should not be empty',
          value: {
            statusCode: 400,
            message: [
              'content must be longer than or equal to 5 characters',
              'content should not be empty',
            ],
            error: 'Bad Request',
          },
        },

        contentMinFieldValidationError: {
          description: 'Content must be longer than or equal to 5 characters',
          value: {
            statusCode: 400,
            message: ['content must be longer than or equal to 5 characters'],
            error: 'Bad Request',
          },
        },

        contentMaxFieldValidationError: {
          description:
            'Content must be shorter than or equal to 240 characters',
          value: {
            statusCode: 400,
            message: [
              'content must be shorter than or equal to 240 characters',
            ],
            error: 'Bad Request',
          },
        },

        categoryEmptyFieldValidationError: {
          description: 'Category should not be empty',
          value: {
            statusCode: 400,
            message: [
              'category must be longer than or equal to 5 characters',
              'category should not be empty',
            ],
            error: 'Bad Request',
          },
        },

        categoryMinFieldValidationError: {
          description: 'Category must be longer than or equal to 5 characters',
          value: {
            statusCode: 400,
            message: ['category must be longer than or equal to 5 characters'],
            error: 'Bad Request',
          },
        },

        categoryMaxFieldValidationError: {
          description:
            'Category must be shorter than or equal to 240 characters',
          value: {
            statusCode: 400,
            message: [
              'category must be shorter than or equal to 240 characters',
            ],
            error: 'Bad Request',
          },
        },

        recipientIdEmptyFieldValidationError: {
          description: 'RecipientId should not be empty',
          value: {
            statusCode: 400,
            message: [
              'recipientId must be a UUID',
              'recipientId should not be empty',
            ],
            error: 'Bad Request',
          },
        },

        recipientIdFieldValueTypeValidationError: {
          description: 'RecipientId must be a UUID',
          value: {
            statusCode: 400,
            message: ['recipientId must be a UUID'],
            error: 'Bad Request',
          },
        },
      },
    },
  },
};

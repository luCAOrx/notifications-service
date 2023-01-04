import { INestApplication } from '@nestjs/common';
import { TestingModule, Test } from '@nestjs/testing';
import { sendNotification } from '@test/factories/notificationFactory';
import { AppModule } from '../../../app.module';

import * as request from 'supertest';

describe('Unread notification', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('should be able to unread a notification', async () => {
    const { body } = await sendNotification({ server: app.getHttpServer() });

    return request(app.getHttpServer())
      .patch(`/notifications/${body.notification.id}/unread`)
      .expect(200);
  });

  it('should not be able to unread a non existing notification', async () => {
    return request(app.getHttpServer())
      .patch('/notifications/fake-notification-id/unread')
      .expect(400, {
        statusCode: 400,
        message: 'Notification not found.',
        error: 'Bad request',
      });
  });

  afterAll(async () => {
    await app.close();
  });
});

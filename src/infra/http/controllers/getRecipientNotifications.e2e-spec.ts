import { INestApplication } from '@nestjs/common';
import { TestingModule, Test } from '@nestjs/testing';
import { AppModule } from '../../../app.module';

import * as request from 'supertest';
import { sendNotification } from '@test/factories/notificationFactory';

describe('Get recipient notifications', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('should be able get a recipient notifications', async () => {
    const { body } = await sendNotification({ server: app.getHttpServer() });

    return request(app.getHttpServer())
      .get(`/notifications/from/${body.notification.recipientId}`)
      .expect(200, {
        notifications: [
          {
            id: body.notification.id,
            category: 'integration test',
            content: 'This is a integration test notification',
            recipientId: body.notification.recipientId,
          },
        ],
      });
  });

  afterAll(async () => {
    await app.close();
  });
});

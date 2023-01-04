import { INestApplication } from '@nestjs/common';
import { TestingModule, Test } from '@nestjs/testing';
import { sendNotification } from '@test/factories/notificationFactory';
import { AppModule } from '../../../app.module';

import * as request from 'supertest';

describe('Count recipient notification', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('should be able count a recipient notifications', async () => {
    const { body } = await sendNotification({ server: app.getHttpServer() });

    return request(app.getHttpServer())
      .get(`/notifications/count/from/${body.notification.recipientId}`)
      .expect(200, { count: 1 });
  });

  afterAll(async () => {
    await app.close();
  });
});

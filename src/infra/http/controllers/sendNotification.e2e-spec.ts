import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import * as request from 'supertest';
import { AppModule } from '../../../app.module';
import { notificationUUID } from '@application/entities/notification';

describe('Send notification', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('should be able to send a notification', () => {
    const recipientId = randomUUID();

    const id = notificationUUID;

    return request(app.getHttpServer())
      .post('/notifications')
      .send({
        content: 'This is a integration test notification',
        category: 'integration test',
        recipientId,
      })
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(201, {
        notification: {
          id,
          content: 'This is a integration test notification',
          category: 'integration test',
          recipientId,
        },
      });
  });

  it('should not be able to send a notification with content field empty', () => {
    const recipientId = randomUUID();

    return request(app.getHttpServer())
      .post('/notifications')
      .send({
        content: '',
        category: 'integration test',
        recipientId,
      })
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(400, {
        statusCode: 400,
        message: [
          'content must be longer than or equal to 5 characters',
          'content should not be empty',
        ],
        error: 'Bad Request',
      });
  });

  it('should not be able to send a notification with content field value less than 5 characters', () => {
    const recipientId = randomUUID();

    return request(app.getHttpServer())
      .post('/notifications')
      .send({
        content: 'This',
        category: 'integration test',
        recipientId,
      })
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(400, {
        statusCode: 400,
        message: ['content must be longer than or equal to 5 characters'],
        error: 'Bad Request',
      });
  });

  it('should not be able to send a notification with content field value more than 240 characters', () => {
    const recipientId = randomUUID();

    return request(app.getHttpServer())
      .post('/notifications')
      .send({
        content: 'T'.repeat(241),
        category: 'integration test',
        recipientId,
      })
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(400, {
        statusCode: 400,
        message: ['content must be shorter than or equal to 240 characters'],
        error: 'Bad Request',
      });
  });

  it('should not be able to send a notification with category field empty', () => {
    const recipientId = randomUUID();

    return request(app.getHttpServer())
      .post('/notifications')
      .send({
        content: 'This is a integration test notification',
        category: '',
        recipientId,
      })
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(400, {
        statusCode: 400,
        message: [
          'category must be longer than or equal to 5 characters',
          'category should not be empty',
        ],
        error: 'Bad Request',
      });
  });

  it('should not be able to send a notification with category field value less than 5 characters', () => {
    const recipientId = randomUUID();

    return request(app.getHttpServer())
      .post('/notifications')
      .send({
        content: 'This is a integration test notification',
        category: 'inte',
        recipientId,
      })
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(400, {
        statusCode: 400,
        message: ['category must be longer than or equal to 5 characters'],
        error: 'Bad Request',
      });
  });

  it('should not be able to send a notification with category field value more than 240 characters', () => {
    const recipientId = randomUUID();

    return request(app.getHttpServer())
      .post('/notifications')
      .send({
        content: 'This is a integration test notification',
        category: 'i'.repeat(241),
        recipientId,
      })
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(400, {
        statusCode: 400,
        message: ['category must be shorter than or equal to 240 characters'],
        error: 'Bad Request',
      });
  });

  it('should not be able to send a notification with recipientId field empty', () => {
    return request(app.getHttpServer())
      .post('/notifications')
      .send({
        content: 'This is a integration test notification',
        category: 'integration test',
        recipientId: '',
      })
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(400, {
        statusCode: 400,
        message: [
          'recipientId must be a UUID',
          'recipientId should not be empty',
        ],
        error: 'Bad Request',
      });
  });

  it('should not be able to send a notification if recipientId field value not UUID', () => {
    return request(app.getHttpServer())
      .post('/notifications')
      .send({
        content: 'This is a integration test notification',
        category: 'integration test',
        recipientId: '12345',
      })
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(400, {
        statusCode: 400,
        message: ['recipientId must be a UUID'],
        error: 'Bad Request',
      });
  });

  afterAll(async () => {
    await app.close();
  });
});

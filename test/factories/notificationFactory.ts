import { Content } from '@application/entities/content';
import {
  Notification,
  NotificationProps,
} from '@application/entities/notification';
import { INestApplication } from '@nestjs/common';

import * as request from 'supertest';

import { randomUUID } from 'node:crypto';

type Override = Partial<NotificationProps>;

/**
 * @info
 *
 * This function is used for create a notification in domain layer
 **/
export function makeNotification(override: Override = {}) {
  return new Notification({
    category: 'social',
    content: new Content('Nova solicitação de amizade!'),
    recipientId: 'recipient-1',
    ...override,
  });
}

/**
 * @info
 *
 * This function is used for send a notification in infra layer
 **/
export function sendNotification({
  override = {},
  server,
}: {
  override?: Override;
  server: INestApplication;
}) {
  const recipientId = randomUUID();

  return request(server)
    .post('/notifications')
    .send({
      content: 'This is a integration test notification',
      category: 'integration test',
      recipientId,
      ...override,
    });
}

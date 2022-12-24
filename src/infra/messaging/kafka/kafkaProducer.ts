import { Kafka, Partitioners } from 'kafkajs';
import { randomUUID } from 'node:crypto';

async function bootstrap() {
  const kafka = new Kafka({
    clientId: 'notifications',
    brokers: ['127.0.0.1:9092'],
  });

  const producer = kafka.producer({
    createPartitioner: Partitioners.LegacyPartitioner,
  });

  await producer.connect();

  await producer
    .send({
      topic: 'notifications.send-notification',
      messages: [
        {
          value: JSON.stringify({
            content: 'Hello world',
            category: 'kafka',
            recipientId: randomUUID(),
          }),
        },
      ],
    })
    .then(() => console.log('Created message.'));

  await producer.disconnect();
}

bootstrap();

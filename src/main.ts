import { KafkaConsumerService } from '@infra/messaging/kafka/kafkaConsumer.service';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions } from '@nestjs/microservices';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());

  const kafkaConsumerService = app.get(KafkaConsumerService);

  const config = new DocumentBuilder()
    .setTitle('Notifications service')
    .setDescription('This API aims to manage notifications')
    .setVersion('0.0.1')
    .addServer('http://localhost:3000', 'Development API')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document, {
    customSiteTitle: 'Notifications service API documentation',
  });

  app.connectMicroservice<MicroserviceOptions>({
    strategy: kafkaConsumerService,
  });

  await app.startAllMicroservices();
  await app.listen(3000);
}
bootstrap();

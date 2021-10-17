import { NestFactory } from '@nestjs/core';
import { AppModule } from './app';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { grpcOption } from './configs/grpc.option';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.GRPC,
    options: grpcOption,
  });
  app.listen();
}
bootstrap();

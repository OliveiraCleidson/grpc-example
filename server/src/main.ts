import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { resolve } from 'path';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
        package: 'v1.server',
        protoPath: resolve(__dirname, 'proto', 'v1-server.proto'),
      },
    },
  );
  await app.listen();
}
bootstrap();

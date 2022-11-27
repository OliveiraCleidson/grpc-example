import { Metadata } from '@grpc/grpc-js';
import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { AppService } from './app.service';
import { UserByIdRequest, UserDto } from './proto/v1-server';

@Controller()
export class UserService {
  constructor(private readonly appService: AppService) {}

  @GrpcMethod()
  findOneById(data: UserByIdRequest, metadata: Metadata): UserDto {
    console.log(data);
    const itens: UserDto[] = [
      {
        id: '1',
        name: 'John Doe',
      },
      {
        id: '2',
        name: 'Jane Doe',
      },
    ];

    return itens.find((item) => item.id === data.id);
  }
}

import { Metadata } from '@grpc/grpc-js';
import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { UserDto, UserService } from './proto/v1-server';

@Injectable()
export class AppService implements OnModuleInit {
  private userService: UserService;

  constructor(@Inject('V1-SERVER') private client: ClientGrpc) {}

  onModuleInit() {
    this.userService = this.client.getService<UserService>('UserService');
  }

  getUser(id: string): Observable<UserDto> {
    const metadata = new Metadata();
    metadata.add('Set-Cookie', 'madeIn=Brazil');
    metadata.set('client-agent', 'client/v0.0.1');
    // Set user agent
    return this.userService.findOneById({ id }, metadata).pipe((data) => {
      console.log(data);
      return data;
    });
  }
}

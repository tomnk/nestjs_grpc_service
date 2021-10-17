import { Metadata } from '@grpc/grpc-js';
import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { EmailInput } from '../dtos';
import { UserEntity } from '../entities';
import { UserService } from '../services';

@Controller('')
export class UserController {
  constructor(private userService: UserService) {}

  @GrpcMethod('UserService', 'FindOne')
  findOne(_data: unknown, metadata: Metadata): Promise<UserEntity | undefined> {
    const userId = metadata.get('userId')[0] as string;
    return this.userService.findOne(userId);
  }

  @GrpcMethod('UserService', 'FindUserByEmail')
  async findUserByEmail(data: EmailInput): Promise<UserEntity | undefined> {
    const { email } = data;
    return this.userService.findOneByEmail(email);
  }
}

import {
  noContent,
  ok,
  serverError,
} from '@/presentation/helpers/http/http-helper';
import { Controller, HttpResponse } from './load-users-controller-protocols';
import { UserRepository } from '@/infra/database/typeorm/repositories/user-repository';

export class LoadUsersController implements Controller {
  constructor(private readonly userRepo: UserRepository) {}
  async handle(): Promise<HttpResponse> {
    try {
      const users = await this.userRepo.findAll();
      return users.length ? ok(users) : noContent();
    } catch (error) {
      return serverError(error);
    }
  }
}

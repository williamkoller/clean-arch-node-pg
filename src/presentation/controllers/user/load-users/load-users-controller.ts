import {
  noContent,
  ok,
  serverError,
} from '@/presentation/helpers/http/http-helper';
import {
  Controller,
  HttpRequest,
  HttpResponse,
} from './load-users-controller-protocols';
import { LoadUsers } from '@/domain/usecases/user/load-users';

export class LoadUsersController implements Controller {
  constructor(private readonly loadUsers: LoadUsers) {}
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const users = await this.loadUsers.loadUsers();
      return users.length ? ok(users) : noContent();
    } catch (error) {
      console.error(error);
      return serverError(error);
    }
  }
}

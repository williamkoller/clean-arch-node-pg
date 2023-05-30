import { LoadUserByToken } from '@/domain/usecases/user/load-user-by-token';
import { Middleware } from '../protocols/middleware';
import { HttpRequest, HttpResponse } from '../protocols';
import { forbidden, ok, serverError } from '../helpers/http/http-helper';
import { AccessDeniedError } from '../errors/access-denied-error';

export class AuthMiddleware implements Middleware {
  constructor(private readonly loadUserByToken: LoadUserByToken) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const accessToken = httpRequest.headers?.['x-access-token'];
      if (accessToken) {
        const user = await this.loadUserByToken.load(accessToken);
        if (user) {
          return ok(user);
        }
      }
      return forbidden(new AccessDeniedError());
    } catch (error) {
      return serverError(error);
    }
  }
}

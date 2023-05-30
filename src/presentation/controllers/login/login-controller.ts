import {
  ok,
  serverError,
  unauthorized,
} from '@/presentation/helpers/http/http-helper';
import {
  Authentication,
  Controller,
  HttpRequest,
  HttpResponse,
} from './login-controller-protocols';

export class LoginController implements Controller {
  constructor(private readonly authentication: Authentication) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { email, password } = httpRequest.body;

      const authentication = await this.authentication.auth({
        email,
        password,
      });

      if (!authentication) {
        return unauthorized();
      }

      return ok(authentication);
    } catch (error) {
      return serverError(error);
    }
  }
}

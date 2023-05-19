import { LoadRoles } from '@/domain/usecases/role/load-roles';
import {
  Controller,
  HttpRequest,
  HttpResponse,
} from './load-roles-controller-protocols';
import {
  noContent,
  ok,
  serverError,
} from '@/presentation/helpers/http/http-helper';

export class LoadRolesController implements Controller {
  constructor(private readonly loadRoles: LoadRoles) {}

  async handle(_httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const roles = await this.loadRoles.loadRoles();
      return roles.length ? ok(roles) : noContent();
    } catch (error) {
      console.error(error);
      return serverError(error);
    }
  }
}

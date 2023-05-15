import {
  badRequest,
  conflictError,
  create,
  serverError,
} from '@/presentation/helpers/http/http-helper';
import {
  Controller,
  HttpRequest,
  HttpResponse,
} from './add-role-controller-protocols';
import { AddRole } from '@/domain/usecases/role/add-role';
import { AddRoleDTO } from '@/presentation/dtos/role/add-role.dto';
import { validate } from 'class-validator';
import { FieldsError } from '@/presentation/errors/fields-error';
import { NameInUseError } from '@/presentation/errors/name-in-use-error';

export class AddRoleController implements Controller {
  constructor(private readonly addRole: AddRole) {}
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { name, permissions, userId } = httpRequest.body;
      const addRoleDTO = new AddRoleDTO();
      addRoleDTO.name = name;
      addRoleDTO.permissions = permissions;

      const errors = await validate(addRoleDTO, { whitelist: true });

      if (errors.length) {
        return badRequest(
          new FieldsError(errors.map((error) => error.constraints))
        );
      }

      const newRole = await this.addRole.add({ name, permissions, userId });

      if (!newRole) {
        return conflictError(new NameInUseError());
      }

      return create(newRole);
    } catch (error) {
      return serverError(error);
    }
  }
}

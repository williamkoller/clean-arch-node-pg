import { AddUser } from '@/domain/usecases/user/add-user';
import {
  Controller,
  HttpRequest,
  HttpResponse,
} from '@/presentation/controllers/user/add-user/add-user-controller-protocols';
import { AddUserDTO } from '@/presentation/dtos/user/add-user.dto';
import { EmailInUseError } from '@/presentation/errors/email-in-use-error';
import { FieldsError } from '@/presentation/errors/fields-error';
import {
  conflictError,
  create,
  fieldsError,
  serverError,
} from '@/presentation/helpers/http/http-helper';
import { validate, validateOrReject } from 'class-validator';

export class AddUserController implements Controller {
  constructor(private readonly addUser: AddUser) {}
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { name, email, password } = httpRequest.body;
      const addUserDTO = new AddUserDTO();
      addUserDTO.name = name;
      addUserDTO.email = email;
      addUserDTO.password = password;

      await validateOrReject(addUserDTO);
      const errors = await validate(addUserDTO, { whitelist: true });

      if (errors.length) {
        throw new FieldsError('Fields no validated');
      }

      const addUser = await this.addUser.add({ name, email, password });

      if (!addUser) {
        return conflictError(new EmailInUseError());
      }

      return create(addUser);
    } catch (error) {
      if (error.name === 'FieldsError') {
        return fieldsError(error);
      }
      return serverError(error);
    }
  }
}

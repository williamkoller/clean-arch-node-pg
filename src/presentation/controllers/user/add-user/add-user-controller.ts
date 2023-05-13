import { UserRepository } from '@/infra/database/typeorm/repositories/user-repository';
import {
  Controller,
  HttpRequest,
  HttpResponse,
} from '@/presentation/controllers/user/add-user/add-user-controller-protocols';
import { AddUserDTO } from '@/presentation/dtos/user/add-user.dto';
import { FieldsError } from '@/presentation/errors/fields-error';
import {
  create,
  fieldsError,
  serverError,
} from '@/presentation/helpers/http/http-helper';
import { validate, validateOrReject } from 'class-validator';

export class AddUserController implements Controller {
  constructor(private readonly userRepo: UserRepository) {}
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

      const addUser = await this.userRepo.add({ name, email, password });
      return create(addUser);
    } catch (error) {
      if (error.name === 'FieldsError') {
        return fieldsError(error);
      }
      return serverError(error);
    }
  }
}

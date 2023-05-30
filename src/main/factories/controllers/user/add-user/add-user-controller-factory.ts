import { makeDbAddUser } from '@/main/factories/usecases/user/add-user/db-add-user-factory';
import { AddUserController } from '@/presentation/controllers/user/add-user/add-user-controller';
import { Controller } from '@/presentation/protocols';

export const makeAddUserController = (): Controller => {
  const controller = new AddUserController(makeDbAddUser());
  return controller;
};

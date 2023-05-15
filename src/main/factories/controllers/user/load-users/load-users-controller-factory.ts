import { makeDbLoadUsers } from '@/main/usecases/user/load-users/db-load-users-factory';
import { LoadUsersController } from '@/presentation/controllers/user/load-users/load-users-controller';
import { Controller } from '@/presentation/protocols';

export const makeLoadUsersController = (): Controller => {
  const controller = new LoadUsersController(makeDbLoadUsers());
  return controller;
};

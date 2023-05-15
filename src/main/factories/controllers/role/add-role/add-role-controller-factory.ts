import { makeDbAddRole } from '@/main/usecases/role/add-role/db-add-role-factory';
import { AddRoleController } from '@/presentation/controllers/role/add-role/add-role-controller';
import { Controller } from '@/presentation/protocols';

export const makeAddRoleController = (): Controller => {
  const controller = new AddRoleController(makeDbAddRole());
  return controller;
};

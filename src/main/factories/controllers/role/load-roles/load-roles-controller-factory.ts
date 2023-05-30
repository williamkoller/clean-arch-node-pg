import { makeDbLoadRoles } from '@/main/factories/usecases/role/load-roles/db-load-roles-factory';
import { LoadRolesController } from '@/presentation/controllers/role/load-roles/load-roles-controller';
import { Controller } from '@/presentation/protocols';

export const makeLoadRolesController = (): Controller => {
  const controller = new LoadRolesController(makeDbLoadRoles());
  return controller;
};

import { DbAddRole } from '@/data/usecases/role/add-role/db-add-role';
import { AddRole } from '@/domain/usecases/role/add-role';
import { RoleTypeOrmRepository } from '@/infra/database/typeorm/repositories/role-typeorm-repository';

export const makeDbAddRole = (): AddRole => {
  const roleTypeOrmRepository = new RoleTypeOrmRepository();
  return new DbAddRole(roleTypeOrmRepository, roleTypeOrmRepository);
};

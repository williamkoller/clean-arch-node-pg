import { DbLoadRoles } from '@/data/usecases/role/load-roles/db-load-roles';
import { LoadRoles } from '@/domain/usecases/role/load-roles';
import { RoleTypeOrmRepository } from '@/infra/database/typeorm/repositories/role-typeorm-repository';

export const makeDbLoadRoles = (): LoadRoles => {
  const roleTypeOrmRepository = new RoleTypeOrmRepository();
  return new DbLoadRoles(roleTypeOrmRepository);
};

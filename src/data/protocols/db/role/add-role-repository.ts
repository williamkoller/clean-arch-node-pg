import { AddRoleParams } from '@/domain/usecases/role/add-role';
import { RoleEntityInMemory } from '@/infra/database/inmemory/entities/role-entity-in-memory.ts';

export interface AddRoleRepository {
  add: (data: AddRoleParams) => Promise<RoleEntityInMemory>;
}

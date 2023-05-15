import { RoleEntityInMemory } from '@/infra/database/inmemory/entities/role-entity-in-memory.ts';

export interface LoadRoleByNameRepository {
  loadByName: (name: string) => Promise<RoleEntityInMemory>;
}

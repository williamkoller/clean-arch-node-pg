import { AddRoleRepository } from '@/data/protocols/db/role/add-role-repository';
import { AddRoleParams } from '@/domain/usecases/role/add-role.js';
import { RoleEntityInMemory } from '../entities/role-entity-in-memory.ts';

export class RoleRepositoryInMemory implements AddRoleRepository {
  roles: RoleEntityInMemory[] = [];

  async add(data: AddRoleParams): Promise<RoleEntityInMemory> {
    const lasUserId = this.roles[this.roles.length - 1].id;
    const newUser = {
      id: lasUserId + 1,
      name: data.name,
      permissions: data.permissions,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.roles.push(newUser);
    return this.roles.find((role) => role.name === data.name);
  }
}

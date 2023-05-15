import { AddRoleRepository } from '@/data/protocols/db/role/add-role-repository';
import { LoadRoleByNameRepository } from '@/data/protocols/db/role/load-role-by-name-repository';
import { RoleModel } from '@/domain/models/role/role';
import { AddRole } from '@/domain/usecases/role/add-role';

export class DbAddRole implements AddRole {
  constructor(
    private readonly addRoleRepository: AddRoleRepository,
    private readonly loadRoleByNameRepository: LoadRoleByNameRepository
  ) {}

  async add(data: Partial<Omit<RoleModel, 'id'>>): Promise<RoleModel> {
    const role = await this.loadRoleByNameRepository.loadByName(data.name);

    if (role) {
      return null;
    }

    const newRole = await this.addRoleRepository.add(Object.assign({}, data));
    return newRole;
  }
}

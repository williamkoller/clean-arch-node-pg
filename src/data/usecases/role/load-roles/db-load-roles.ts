import { LoadRolesRepository } from '@/data/protocols/db/role/load-roles-repository';
import { RoleModel } from '@/domain/models/role/role';
import { LoadRoles } from '@/domain/usecases/role/load-roles';

export class DbLoadRoles implements LoadRoles {
  constructor(private readonly loadRolesRepository: LoadRolesRepository) {}
  async loadRoles(): Promise<RoleModel[]> {
    const roles = await this.loadRolesRepository.loadRoles();

    if (!roles) {
      return null;
    }

    return roles;
  }
}

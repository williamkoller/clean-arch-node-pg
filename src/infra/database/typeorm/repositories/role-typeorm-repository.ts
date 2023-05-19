import { AddRoleRepository } from '@/data/protocols/db/role/add-role-repository';
import { AppDataSource } from '../config/data-source';
import { RoleEntity } from '../entities/role.entity';
import { AddRoleParams } from '@/domain/usecases/role/add-role';
import { LoadRoleByNameRepository } from '@/data/protocols/db/role/load-role-by-name-repository';
import { LoadRolesRepository } from '@/data/protocols/db/role/load-roles-repository';
import { RoleModel } from '@/domain/models/role/role';

export class RoleTypeOrmRepository
  implements AddRoleRepository, LoadRoleByNameRepository, LoadRolesRepository
{
  private repository = AppDataSource.getRepository(RoleEntity);

  async add(data: AddRoleParams): Promise<RoleEntity> {
    const newRole = Object.assign({}, data);
    return await this.repository.save(newRole);
  }

  async loadByName(name: string): Promise<RoleEntity> {
    return await this.repository
      .createQueryBuilder('roles')
      .where(`roles.name ILIKE :name`, { name: `%${name}%` })
      .getOne();
  }

  async loadRoles(): Promise<RoleModel[]> {
    return await this.repository.find();
  }
}

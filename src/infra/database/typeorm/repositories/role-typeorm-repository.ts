import { AddRoleRepository } from '@/data/protocols/db/role/add-role-repository';
import { AppDataSource } from '../config/data-source';
import { RoleEntity } from '../entities/role.entity';
import { RoleEntityInMemory } from '../../inmemory/entities/role-entity-in-memory.ts';
import { AddRoleParams } from '@/domain/usecases/role/add-role';
import { LoadRoleByNameRepository } from '@/data/protocols/db/role/load-role-by-name-repository';

export class RoleTypeOrmRepository
  implements AddRoleRepository, LoadRoleByNameRepository
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
}

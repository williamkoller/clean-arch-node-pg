import { AddUserRepository } from '@/data/protocols/db/user/add-user-repository';
import { UserEntityInMemory } from '@/infra/database/inmemory/entities/user-entity-in-memory';

export class UserRepositoryInMemory implements AddUserRepository {
  users: UserEntityInMemory[] = [];

  async add(
    createUserDTO: Partial<Omit<UserEntityInMemory, 'id'>>
  ): Promise<UserEntityInMemory> {
    return this.users.find((user) => user.name === createUserDTO.name);
  }
}

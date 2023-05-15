import { AddUserRepository } from '@/data/protocols/db/user/add-user-repository';
import { AddUserParams } from '@/domain/usecases/user/add-user';
import { UserEntityInMemory } from '@/infra/database/inmemory/entities/user-entity-in-memory';

export class UserRepositoryInMemory implements AddUserRepository {
  users: UserEntityInMemory[] = [];

  async add(data: AddUserParams): Promise<UserEntityInMemory> {
    const lasUserId = this.users[this.users.length - 1].id;
    const newUser = {
      id: lasUserId + 1,
      name: data.name,
      email: data.email,
      password: data.password,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.users.push(newUser);
    return this.users.find((user) => user.name === data.name);
  }
}

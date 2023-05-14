import { AddUserParams } from '@/domain/usecases/user/add-user';
import { UserEntityInMemory } from '@/infra/database/inmemory/entities/user-entity-in-memory';

export interface AddUserRepository {
  add(data: AddUserParams): Promise<UserEntityInMemory>;
}

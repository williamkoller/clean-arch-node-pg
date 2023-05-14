import { DbAddUser } from '@/data/usecases/user/add-user/db-add-user';
import { AddUser } from '@/domain/usecases/user/add-user';
import { BcryptAdapter } from '@/infra/cryptography/bcrypt-adapter/bcrypt-adapter';
import { UserTypeOrmRepository } from '@/infra/database/typeorm/repositories/user-typeorm-repository';

export const makeDbAddUser = (): AddUser => {
  const bcryptAdapter = new BcryptAdapter();
  const userTypeOrmRepository = new UserTypeOrmRepository();
  return new DbAddUser(
    bcryptAdapter,
    userTypeOrmRepository,
    userTypeOrmRepository
  );
};

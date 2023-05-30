import { DbAddUser } from '@/data/usecases/user/add-user/db-add-user';
import { AddUser } from '@/domain/usecases/user/add-user';
import { BcryptAdapter } from '@/infra/cryptography/bcrypt-adapter/bcrypt-adapter';
import { UserTypeOrmRepository } from '@/infra/database/typeorm/repositories/user-typeorm-repository';

export const makeDbAddUser = (): AddUser => {
  const salt = 12;
  const bcryptAdapter = new BcryptAdapter(salt);
  const userTypeOrmRepository = new UserTypeOrmRepository();
  return new DbAddUser(
    bcryptAdapter,
    userTypeOrmRepository,
    userTypeOrmRepository
  );
};

import { DbLoadUsers } from '@/data/usecases/user/load-users/db-load-users';
import { LoadUsers } from '@/domain/usecases/user/load-users';
import { UserTypeOrmRepository } from '@/infra/database/typeorm/repositories/user-typeorm-repository';

export const makeDbLoadUsers = (): LoadUsers => {
  const userTypeOrmRepository = new UserTypeOrmRepository();
  return new DbLoadUsers(userTypeOrmRepository);
};

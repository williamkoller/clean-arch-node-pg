import { UserRepository } from '@/infra/database/typeorm/repositories/user-repository';
import { LoadUsersController } from '@/presentation/controllers/user/load-users/load-users-controller';

export const makeLoadUsersController = (): LoadUsersController => {
  const repository = new UserRepository();
  return new LoadUsersController(repository);
};

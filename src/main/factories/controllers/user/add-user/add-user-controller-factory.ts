import { UserRepository } from '@/infra/database/typeorm/repositories/user-repository';
import { AddUserController } from '@/presentation/controllers/user/add-user/add-user-controller';

export const makeAddUserController = (): AddUserController => {
  const repository = new UserRepository();
  return new AddUserController(repository);
};

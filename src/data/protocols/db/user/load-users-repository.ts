import { UserModel } from '@/domain/models/user/user';

export interface LoadUsersRepository {
  loadUsers: () => Promise<UserModel[]>;
}

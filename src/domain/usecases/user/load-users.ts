import { UserModel } from '@/domain/models/user/user'

export interface LoadUsers {
  loadUsers: () => Promise<UserModel[]>;
}

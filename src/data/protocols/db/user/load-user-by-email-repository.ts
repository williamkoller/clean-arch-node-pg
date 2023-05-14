import { UserModel } from '@/domain/models/user/user';

export interface LoadUserByEmailRepository {
  loadByEmail: (email: string) => Promise<UserModel>;
}

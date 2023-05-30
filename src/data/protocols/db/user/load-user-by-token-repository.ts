import { UserModel } from '@/presentation/middlewares/auth-middleware-protocols';

export interface LoadUserByTokenRepository {
  loadByToken: (token: string) => Promise<UserModel>;
}

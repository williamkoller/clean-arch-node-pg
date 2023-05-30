import { UserModel } from '@/domain/models/user/user';

export interface LoadUserByToken {
  load: (accessToken: string) => Promise<UserModel>;
}

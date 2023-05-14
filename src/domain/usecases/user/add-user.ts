import { UserModel } from '@/domain/models/user/user';

export type AddUserParams = Partial<Omit<UserModel, 'id'>>;

export interface AddUser {
  add: (data: AddUserParams) => Promise<UserModel>;
}

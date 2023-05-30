import { AuthenticationModel } from '@/domain/models/authentication/authentication';

export type AuthenticationParams = {
  email: string;
  password: string;
};

export interface Authentication {
  auth: (
    authenticationParams: AuthenticationParams
  ) => Promise<AuthenticationModel>;
}

import { LoginController } from '@/presentation/controllers/login/login-controller';
import { Controller } from '@/presentation/protocols';
import { makeDbAuthentication } from '../../usecases/authentication/db-authentication-factory';

export const makeLogin = (): Controller => {
  const controller = new LoginController(makeDbAuthentication());
  return controller;
};

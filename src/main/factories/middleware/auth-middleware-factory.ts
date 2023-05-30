import { AuthMiddleware } from '@/presentation/middlewares/auth-middleware';
import { Middleware } from '@/presentation/protocols';
import { makeDbUserByToken } from '../usecases/user/load-user-by-token/db-load-user-by-token-factory';

export const makeAuthMiddleware = (): Middleware => {
  return new AuthMiddleware(makeDbUserByToken());
};

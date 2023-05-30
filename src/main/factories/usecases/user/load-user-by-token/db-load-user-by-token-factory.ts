import { DbLoadUserByToken } from '@/data/usecases/user/load-user-by-token/db-load-user-by-token';
import { JwtAdapter } from '@/infra/cryptography/jwt-adapter/jwt-adapter';
import { UserTypeOrmRepository } from '@/infra/database/typeorm/repositories/user-typeorm-repository';
import env from '@/main/config/env';
import { LoadUserByToken } from '@/presentation/middlewares/auth-middleware-protocols';

export const makeDbUserByToken = (): LoadUserByToken => {
  const jwtAdapter = new JwtAdapter(env.secret);
  const userTypeOrmRepository = new UserTypeOrmRepository();
  return new DbLoadUserByToken(jwtAdapter, userTypeOrmRepository);
};

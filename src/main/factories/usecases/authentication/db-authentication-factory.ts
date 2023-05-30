import { DbAuthentication } from '@/data/usecases/authentication/db-authentication';
import { Authentication } from '@/domain/usecases/authentication/authentication';
import { BcryptAdapter } from '@/infra/cryptography/bcrypt-adapter/bcrypt-adapter';
import { JwtAdapter } from '@/infra/cryptography/jwt-adapter/jwt-adapter';
import { UserTypeOrmRepository } from '@/infra/database/typeorm/repositories/user-typeorm-repository';
import env from '@/main/config/env';

export const makeDbAuthentication = (): Authentication => {
  const salt = 12;
  const bcryptAdapter = new BcryptAdapter(salt);
  const jwtAdapter = new JwtAdapter(env.secret);
  const userTypeOrmRepository = new UserTypeOrmRepository();
  return new DbAuthentication(
    userTypeOrmRepository,
    userTypeOrmRepository,
    bcryptAdapter,
    jwtAdapter
  );
};

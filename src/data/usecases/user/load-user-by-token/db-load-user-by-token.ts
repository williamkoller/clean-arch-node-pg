import { Decrypter } from '@/data/protocols/criptography/decrypter';
import { LoadUserByEmailRepository } from '@/data/protocols/db/user/load-user-by-email-repository';
import {
  LoadUserByToken,
  UserModel,
} from '@/presentation/middlewares/auth-middleware-protocols';

export class DbLoadUserByToken implements LoadUserByToken {
  constructor(
    private readonly decrypter: Decrypter,
    private readonly loadUserByEmailRepository: LoadUserByEmailRepository
  ) {}

  async load(accessToken: string): Promise<UserModel> {
    const token = (await this.decrypter.decrypt(accessToken)) as any;

    if (token) {
      const user = await this.loadUserByEmailRepository.loadByEmail(
        token?.email
      );
      if (user) {
        return user;
      }
    }
    return null;
  }
}

import { Encrypter } from '@/data/protocols/criptography/encrypter';
import { HashComparer } from '@/data/protocols/criptography/hash-comparer';
import { LoadUserByEmailRepository } from '@/data/protocols/db/user/load-user-by-email-repository';
import { UpdateAccessTokenRepository } from '@/data/protocols/db/user/update-access-token-repository';
import { AuthenticationModel } from '@/domain/models/authentication/authentication';
import {
  Authentication,
  AuthenticationParams,
} from '@/domain/usecases/authentication/authentication';

export class DbAuthentication implements Authentication {
  constructor(
    private readonly loadUserByEmailRepository: LoadUserByEmailRepository,
    private readonly updateAccessTokenRepository: UpdateAccessTokenRepository,
    private readonly hasherComparer: HashComparer,
    private readonly encrypter: Encrypter
  ) {}

  async auth(
    authenticationParams: AuthenticationParams
  ): Promise<AuthenticationModel> {
    const user = await this.loadUserByEmailRepository.loadByEmail(
      authenticationParams.email
    );

    if (user) {
      const isValid = await this.hasherComparer.compare(
        authenticationParams.password,
        user.password
      );
      if (isValid) {
        const accessToken = await this.encrypter.encrypt(
          user.id,
          user.name,
          user.email
        );
        await this.updateAccessTokenRepository.updateAccessToken(
          user.id,
          accessToken
        );
        return {
          accessToken,
        };
      }
    }

    return null;
  }
}

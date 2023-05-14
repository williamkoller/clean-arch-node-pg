import { Hasher } from '@/data/protocols/criptography/hasher';
import { AddUserRepository } from '@/data/protocols/db/user/add-user-repository';
import { LoadUserByEmailRepository } from '@/data/protocols/db/user/load-user-by-email-repository';
import { UserModel } from '@/domain/models/user/user';
import { AddUser, AddUserParams } from '@/domain/usecases/user/add-user';

export class DbAddUser implements AddUser {
  constructor(
    private readonly hasher: Hasher,
    private readonly addUserRepository: AddUserRepository,
    private readonly loadUserByEmailRepository: LoadUserByEmailRepository
  ) {}
  async add(userData: AddUserParams): Promise<UserModel> {
    const user = await this.loadUserByEmailRepository.loadByEmail(
      userData.email
    );

    if (!user) {
      const hashedPassword = await this.hasher.hash(userData.password);
      const newUser = await this.addUserRepository.add(
        Object.assign({}, userData, { password: hashedPassword })
      );
      return newUser;
    }

    return null;
  }
}

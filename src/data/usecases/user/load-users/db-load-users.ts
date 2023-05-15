import { LoadUsersRepository } from '@/data/protocols/db/user/load-users-repository';
import { UserModel } from '@/domain/models/user/user';
import { LoadUsers } from '@/domain/usecases/user/load-users';

export class DbLoadUsers implements LoadUsers {
  constructor(private readonly loadUsersRepository: LoadUsersRepository) {}

  async loadUsers(): Promise<UserModel[]> {
    const users = await this.loadUsersRepository.loadUsers();

    if (!users) {
      return null;
    }

    return users;
  }
}

import { AddUserDTO } from '@/presentation/dtos/user/add-user.dto';
import { AppDataSource } from '@/infra/database/typeorm/config/data-source';
import { UserEntity } from '@/infra/database/typeorm/entities/user.entity';
import { AddUserRepository } from '@/data/protocols/db/user/add-user-repository';
import { LoadUserByEmailRepository } from '@/data/protocols/db/user/load-user-by-email-repository';
import { UserModel } from '@/domain/models/user/user';
import { LoadUsersRepository } from '@/data/protocols/db/user/load-users-repository';
import { LoadUserByTokenRepository } from '@/data/protocols/db/user/load-user-by-token-repository';
import { UpdateAccessTokenRepository } from '@/data/protocols/db/user/update-access-token-repository';

export class UserTypeOrmRepository
  implements
    AddUserRepository,
    LoadUserByEmailRepository,
    LoadUsersRepository,
    LoadUserByTokenRepository,
    UpdateAccessTokenRepository
{
  private repository = AppDataSource.getRepository(UserEntity);
  async add(addUserDTO: AddUserDTO): Promise<UserEntity> {
    const newUser = Object.assign({}, addUserDTO);
    return await this.repository.save(newUser);
  }

  async loadUsers(): Promise<UserEntity[]> {
    const users = await this.repository.find();
    return users;
  }

  async loadByEmail(email: string): Promise<UserModel> {
    const user = await this.repository.findOne({ where: { email } });
    return user;
  }

  async loadByToken(token: string): Promise<UserModel> {
    const user = await this.repository.findOne({
      where: { token },
    });

    console.log('loadByToken', user);

    return user;
  }

  async updateAccessToken(id: number, token: string): Promise<void> {
    await this.repository.update(id, { token });
  }
}

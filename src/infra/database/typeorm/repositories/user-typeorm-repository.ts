import { AddUserDTO } from '@/presentation/dtos/user/add-user.dto';
import { AppDataSource } from '@/infra/database/typeorm/config/data-source';
import { UserEntity } from '@/infra/database/typeorm/entities/user.entity';
import { AddUserRepository } from '@/data/protocols/db/user/add-user-repository';
import { LoadUserByEmailRepository } from '@/data/protocols/db/user/load-user-by-email-repository';
import { UserModel } from '@/domain/models/user/user';

export class UserTypeOrmRepository
  implements AddUserRepository, LoadUserByEmailRepository
{
  private repository = AppDataSource.getRepository(UserEntity);
  async add(addUserDTO: AddUserDTO): Promise<UserEntity> {
    const newUser = Object.assign({}, addUserDTO);
    return await this.repository.save(newUser);
  }

  async loadAll(): Promise<UserEntity[]> {
    const users = await this.repository.find();
    return users.length ? users : [];
  }

  async loadByEmail(email: string): Promise<UserModel> {
    const user = await this.repository.findOne({ where: { email } });
    return user;
  }
}

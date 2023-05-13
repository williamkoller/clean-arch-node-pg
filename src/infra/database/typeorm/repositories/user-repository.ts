import { AddUserDTO } from '@/presentation/dtos/user/add-user.dto';
import { AppDataSource } from '../config/data-source';
import { UserEntity } from '../entities/user.entity';

export class UserRepository {
  private repository = AppDataSource.getRepository(UserEntity);
  async findAll(): Promise<UserEntity[]> {
    try {
      return await this.repository.find();
    } catch (error) {
      throw new Error('Error in find on database');
    }
  }

  async add(addUserDTO: AddUserDTO): Promise<UserEntity> {
    try {
      const newUser = Object.assign({}, addUserDTO);
      return await this.repository.save(newUser);
    } catch (error) {
      throw new Error('Error in save on database');
    }
  }
}

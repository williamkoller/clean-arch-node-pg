import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UserEntity } from './user.entity';

@Entity('roles')
export class RoleEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', nullable: false, unique: true })
  name: string;

  @Column({ type: 'text', array: true, nullable: false })
  permissions: string[];

  @Column({ type: 'int', name: 'userId', nullable: true })
  userId?: number;

  @ManyToOne(() => UserEntity, (user) => user.roles, {
    nullable: true,
    cascade: true,
  })
  @JoinTable({
    name: 'userId',
    joinColumn: {
      name: 'user',
      referencedColumnName: 'id',
    },
  })
  user?: UserEntity;

  @CreateDateColumn({
    name: 'createdAt',
    type: 'timestamp',
    nullable: false,
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'updatedAt',
    type: 'timestamp',
    nullable: false,
  })
  updatedAt: Date;
}

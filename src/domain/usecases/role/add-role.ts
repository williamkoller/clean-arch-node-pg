import { RoleModel } from '@/domain/models/role/role';

export type AddRoleParams = Partial<Omit<RoleModel, 'id'>>;

export interface AddRole {
  add: (data: AddRoleParams) => Promise<RoleModel>;
}

import { RoleModel } from '@/domain/models/role/role';

export interface LoadRoleByName {
  loadByName: (name: string) => Promise<RoleModel>;
}

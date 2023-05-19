import { RoleModel } from '@/domain/models/role/role';

export interface LoadRoles {
  loadRoles: () => Promise<RoleModel[]>;
}

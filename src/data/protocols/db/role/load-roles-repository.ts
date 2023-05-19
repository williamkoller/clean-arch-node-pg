import { RoleModel } from '@/domain/models/role/role';

export interface LoadRolesRepository {
  loadRoles: () => Promise<RoleModel[]>;
}

export class RoleEntityInMemory {
  id: number;
  name: string;
  permissions: string[];
  userId?: number;
  createdAt: Date;
  updatedAt: Date;
}

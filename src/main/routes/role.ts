import { Router } from 'express';
import { adaptRoute } from '../adapter/express-route-adapter';
import { makeAddRoleController } from '../factories/controllers/role/add-role/add-role-controller-factory';
import { makeLoadRolesController } from '../factories/controllers/role/load-roles/load-roles-controller-factory';
import { auth } from '../middlewares/auth';

export default (router: Router): void => {
  router.post('/roles', auth, adaptRoute(makeAddRoleController()));
  router.get('/roles', auth, adaptRoute(makeLoadRolesController()));
};

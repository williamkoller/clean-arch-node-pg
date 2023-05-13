import { Router } from 'express';
import { adaptRoute } from '@/main/adapter/express-route-adapter';
import { makeLoadUsersController } from '@/main/factories/controllers/user/load-users/load-users-controller-factory';
import { makeAddUserController } from '../factories/controllers/user/add-user/add-user-controller-factory';

export default (router: Router): void => {
  router.get('/users', adaptRoute(makeLoadUsersController()));
  router.post('/users', adaptRoute(makeAddUserController()));
};

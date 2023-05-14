import { Router } from 'express';
import { adaptRoute } from '@/main/adapter/express-route-adapter';
import { makeAddUserController } from '../factories/controllers/user/add-user/add-user-controller-factory';

export default (router: Router): void => {
  router.post('/users', adaptRoute(makeAddUserController()));
};

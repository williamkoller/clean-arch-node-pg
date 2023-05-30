import { Router } from 'express';
import { adaptRoute } from '../adapter/express-route-adapter';
import { makeLogin } from '../factories/controllers/login/login-controller-factory';

export default (router: Router): void => {
  router.post('/login', adaptRoute(makeLogin()));
};

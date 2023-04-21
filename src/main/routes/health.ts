import { Router } from 'express';
import { adaptRoute } from '../adapter/express-route-adapter';
import { makeHealthController } from '../factories/controllers/health/health-controller-factory';

export default (router: Router): void => {
  router.get('/health', adaptRoute(makeHealthController()));
};

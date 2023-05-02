import { Express } from 'express';
import { cors, contentType, bodyParser, noCache } from '../middlewares';

export default (app: Express): void => {
  app.use(cors);
  app.use(contentType);
  app.use(bodyParser);
  app.use(noCache)
};

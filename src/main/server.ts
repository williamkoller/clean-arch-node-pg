import 'dotenv/config';
import 'reflect-metadata';
import 'module-alias/register';
import env from './config/env';
import { AppDataSource } from '@/infra/database/typeorm/config/data-source';

async function bootstrap() {
  let app = (await import('./config/app')).default;
  const port = env.port;

  AppDataSource.initialize()
    .then(async () => {
      console.log('Database up');

      app.listen(port, () =>
        console.log(`Server running at http://localhost:${port}`)
      );
    })
    .catch((error) => console.log(error));
}

bootstrap();

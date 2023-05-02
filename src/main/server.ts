import 'dotenv/config';
import 'module-alias/register';
import env from './config/env';

async function bootstrap() {
  const app = (await import('./config/app')).default;
  const port = env.port
  app.listen(port, () =>
    console.log(`Server running at http://localhost:${port}`)
  );
}

bootstrap();

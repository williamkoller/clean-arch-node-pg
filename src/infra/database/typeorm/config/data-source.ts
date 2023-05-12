import { DataSource } from 'typeorm';

const postgresConfig = {
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
};

export const AppDataSource = new DataSource({
  ...postgresConfig,
  type: 'postgres',
  synchronize: true,
  logging: false,
  entities: ['src/infra/database/typeorm/entities/*.entity{.ts,.js}'],
  migrations: ['src/infra/database/typeorm/migrations/*{.ts,.js}'],
  migrationsTableName: 'migrations',
  migrationsRun: true,
  migrationsTransactionMode: 'all',
});

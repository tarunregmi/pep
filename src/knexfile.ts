import type { Knex } from 'knex';
import { config as envConfig } from 'dotenv';

envConfig();
envConfig({ path: '../.env' });

const knexConfig: Knex.Config = {
  client: process.env.DB_CLIENT,
  connection: {
    port: Number(process.env.DB_PORT),
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
  migrations: { directory: 'knex/migrations' },
  seeds: { directory: 'knex/seeds' },
};

export default knexConfig;

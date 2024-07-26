import 'dotenv/config';
import { Options, Sequelize } from 'sequelize';

const config: Options = {
  dialect: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  logging: false,
};

const sequelize = new Sequelize(config);

export default sequelize;

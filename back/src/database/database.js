import Sequelize from "sequelize";
import dotenv from 'dotenv'

dotenv.config()

const { DB_NAME, DB_USER, DB_PASS, DB_HOST, DB_DIAL, DB_LOGG } = process.env;

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  host: DB_HOST,
  dialect: DB_DIAL,

  loggin: DB_LOGG,
});

export default sequelize;

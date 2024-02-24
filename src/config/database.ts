import { Sequelize } from 'sequelize';
import { getFromEnv } from '../services/config.service';

const database = new Sequelize(
    getFromEnv('DATABASE_NAME'),
    getFromEnv('DATABASE_USERNAME'),
    getFromEnv('DATABASE_PASSWORD'),
    {
        dialect: 'postgres',
        logging: false
    }
);

export { database };

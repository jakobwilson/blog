import * as dotenv from 'dotenv';

dotenv.config();


export default {
    db: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        database: process.env.DB_SCHEMA,
        password: process.env.DB_PASS,
    }
}
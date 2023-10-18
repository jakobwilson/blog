import * as dotenv from 'dotenv';
dotenv.config();

const mg = {
    domain: process.env.MG_DOMAIN,
    key: process.env.MG_KEY
}

const db = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_SCHEMA,
    password: process.env.DB_PASS,
}

export default {
    mg,
    db
}
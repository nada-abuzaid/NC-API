require('dotenv').config();
const { Pool } = require('pg');

let DB_URL;
if (process.env.NODE_ENV === 'test') {
  DB_URL = process.env.TEST_DB_URL;
} else if (process.env.NODE_ENV === 'development') {
  DB_URL = process.env.DATABASE_URL;
}

const connection = new Pool({
  connectionString: DB_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
});

module.exports = connection;

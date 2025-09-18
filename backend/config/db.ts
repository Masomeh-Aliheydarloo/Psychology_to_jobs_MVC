//import mysql from 'mysql2';
import mysql from 'mysql2/promise';
import 'dotenv/config';

export const db = mysql.createPool({
   host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
   waitForConnections: true,
  connectionLimit: 10, // this replaces "pool" options
  queueLimit: 0
});


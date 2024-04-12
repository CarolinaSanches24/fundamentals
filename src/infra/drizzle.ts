import { Pool } from "pg";
import { drizzle } from "drizzle-orm/node-postgres";


const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT as any,
  user: process.env.DB_USER,
  password:process.env.DB_PASS,
  database: process.env.DB_NAME,
});

const db = drizzle(pool);

export default db;
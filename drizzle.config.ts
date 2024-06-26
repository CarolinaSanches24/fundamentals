import type { Config } from "drizzle-kit";
import * as dotenv from "dotenv";
dotenv.config();
const dbUrl = process.env.DB_URL;

export default {
  schema: "./src/infra/dataBase/schemaUser.ts*",
  out: "./src/infra/dataBase/drizzle",
  driver: 'pg',
  dbCredentials: {
    connectionString: String(dbUrl),
  },
  verbose:true,
  strict:true,

} satisfies Config;

import type { Config } from "drizzle-kit";
import * as dotenv from "dotenv";
dotenv.config();
 
export default {
  schema: "./src/infra/dataBase/userTable.ts*",
  out: "./drizzle",
  driver: 'pg',
//   dbCredentials: {
    
//      connectionString: process.env.DB_URL, conexao com mysql
//   }
} satisfies Config;
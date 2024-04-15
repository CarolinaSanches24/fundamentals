import { Pool } from "pg";
import { env } from "../../utils/env";
import { drizzle } from "drizzle-orm/node-postgres";
import { migrate } from "drizzle-orm/node-postgres/migrator";

const pool = new Pool({
  connectionString: env.variables.DATABASE_URL,
});

export const db = drizzle(pool);

const main = async () => {
  console.log("🚀 migration started ... ");
  await migrate(db, { migrationsFolder: "drizzle" });
  console.log("migration ended ...");
  process.exit(0);
};

main().catch((err) => {
  console.log(err);
  process.exit(0);
});

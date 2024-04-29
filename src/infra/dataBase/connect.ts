import { Client } from "pg";
import { env } from "../../utils/env";
import { drizzle } from "drizzle-orm/node-postgres";
import { schemaUser } from "./schemas/userSchema";

import * as schema from "./schemas/userSchema";

const client = new Client({
    connectionString:env.variables.DATABASE_URL,

});

client.connect();
export const db = drizzle(client, {schema:schema})
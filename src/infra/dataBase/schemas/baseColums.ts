import { sql } from "drizzle-orm";
import { serial, varchar } from "drizzle-orm/pg-core";
import { customDate } from "../../../types/customType";

export const baseColumns = {
  id: serial("id").primaryKey(),
  pid: varchar("pid", { length: 191 }).notNull(),
  created_at: customDate("created_at")
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
  updated_at: customDate("updated_at")
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
};

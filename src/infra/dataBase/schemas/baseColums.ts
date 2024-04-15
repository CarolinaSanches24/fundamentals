import { sql } from "drizzle-orm";
import { serial, varchar } from "drizzle-orm/pg-core";

export const baseColumns = {
  id: serial("id").primaryKey(),
  pid: varchar("pid", { length: 191 }).notNull(),
};

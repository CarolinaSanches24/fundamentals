
import { serial, timestamp, varchar } from "drizzle-orm/pg-core";

export const baseColumns = {
  id: serial("id").primaryKey(),
  pid: varchar("pid", { length: 191 }).notNull(),
  createdAt:timestamp("createdAt", {mode:"date"}).defaultNow(),
  updatedAt:timestamp("updatedAt", {mode:"date"}).defaultNow()
    
};


import { serial, timestamp } from "drizzle-orm/pg-core";

export const baseColumns = {
  id: serial("id").primaryKey(),
  createdAt:timestamp("createdAt", {mode:"date"}).defaultNow(),
  updatedAt:timestamp("updatedAt", {mode:"date"}).defaultNow()
    
};

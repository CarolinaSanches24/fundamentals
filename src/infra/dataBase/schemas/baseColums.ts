
import { serial } from "drizzle-orm/pg-core";

export const baseColumns = {
  id: serial("id").primaryKey(),
    
};

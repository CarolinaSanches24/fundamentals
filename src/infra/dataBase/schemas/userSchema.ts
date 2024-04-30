import { baseColumns } from "./baseColums";
import { pgTable, varchar} from "drizzle-orm/pg-core";

export const schemaUser = pgTable("users", {
  ...baseColumns,
  name: varchar("name", { length: 191 }).notNull(),
  email: varchar("email", { length: 191 }).unique().notNull(),
  password: varchar("password", { length: 50 }).notNull(),

});

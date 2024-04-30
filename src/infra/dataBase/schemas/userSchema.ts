import { baseColumns } from "./baseColums";
import { pgTable, varchar,  pgEnum } from "drizzle-orm/pg-core";

export const rolesEnum = pgEnum("roles",["admin","client","employee"]);
export const schemaUser = pgTable("users", {
  ...baseColumns,
  name: varchar("name", { length: 191 }).notNull(),
  email: varchar("email", { length: 191 }).unique().notNull(),
  password: varchar("password", { length: 50 }).notNull(),
  role:rolesEnum("role").default("client"),

});

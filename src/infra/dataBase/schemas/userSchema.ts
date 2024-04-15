import { mysqlTable, varchar } from "drizzle-orm/mysql-core";
import { baseColumns } from "./baseColums";

export const schemaUser = mysqlTable('users',{
    // ...baseColumns,
    name:varchar('name',{length:191}).notNull(),
    email:varchar('email',{length:191}).unique().notNull(),
    password:varchar('password',{length:50}).notNull()
});
import { pgTable, serial, varchar} from "drizzle-orm/pg-core";
export const schemaUser = pgTable('users',{
    id:serial('id').primaryKey(),
    name:varchar('name',{length:191})
});
import {sql} from 'drizzle-orm';
import {datetime, varchar} from 'drizzle-orm/mysql-core';
import { uuid } from 'drizzle-orm/pg-core';

export const baseColumns = {
	id: uuid('id').defaultRandom().primaryKey(),
	pid: varchar('pid', {length: 191}).notNull(),
	created_at: datetime('created_at')
		.notNull()
		.default(sql`CURRENT_TIMESTAMP`),
	updated_at: datetime('updated_at')
		.notNull()
		.default(sql`CURRENT_TIMESTAMP`),
};
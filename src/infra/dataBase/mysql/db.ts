import {drizzle} from 'drizzle-orm/mysql2';
import {mysqlSchema} from 'drizzle-orm/mysql-core';
import mysql from 'mysql2/promise';
import {env} from '../../../utils/env';

export const db = drizzle(
	mysql.createPool({
		uri: env.variables.DATABASE_URL,
	}),
);

export const schema = mysqlSchema(env.variables.DATABASE_SCHEMA);
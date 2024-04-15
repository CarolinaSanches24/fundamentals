CREATE TABLE IF NOT EXISTS "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"pid" varchar(191) NOT NULL,
	"name" varchar(191) NOT NULL,
	"email" varchar(191) NOT NULL,
	"password" varchar(50) NOT NULL,
	CONSTRAINT "users_email_unique" UNIQUE("email")
);

import { DrizzlePostgreSQLAdapter } from "@lucia-auth/adapter-drizzle";
import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import { pgTable, text, timestamp } from "drizzle-orm/pg-core";

const connectionString = process.env.DATABASE_URL!;

const client = postgres(connectionString, { prepare: false });
const db = drizzle(client);

const userTable = pgTable("user", {
  id: text("id").primaryKey()
});

const sessionTable = pgTable("session", {
  id: text("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => userTable.id),
  expiresAt: timestamp("expires_at", {
    withTimezone: true,
    mode: "date"
  }).notNull()
});

export const adapter = new DrizzlePostgreSQLAdapter(db, sessionTable, userTable);
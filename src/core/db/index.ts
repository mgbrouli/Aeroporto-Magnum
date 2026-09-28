import { drizzle } from 'drizzle-orm/node-sqlite';
import { DatabaseSync } from 'node:sqlite';
import "dotenv/config";


const sqlite = new DatabaseSync(process.env.DATABASE_URL!);
export const db =drizzle({client: sqlite})

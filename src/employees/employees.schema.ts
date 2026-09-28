import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';
import { EmployeeRole } from './dto/create-employee.dto.js';



export const employees = sqliteTable('employees', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  age: integer('age').notNull(),
  role: text('role').$type<EmployeeRole>().notNull(),
})

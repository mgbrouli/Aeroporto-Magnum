import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';


export const aircraft = sqliteTable('aircrafts', {
    id: integer('id').primaryKey({autoIncrement: true}),
    name: text('name').notNull(),
    model: text('model').notNull(),
    autonomy: integer('autonomy').notNull(),
    quantidade_assentos: integer('qtd_assentos').notNull(),
    in_use: integer('in_use', {mode: "boolean"})
})
import { pgTable, timestamp, text, index, integer, boolean } from "drizzle-orm/pg-core";

let l = 1;

export const tasks = pgTable('tasks', {
        id: integer('id').notNull().primaryKey().default(l++),
        kindeAuthId: text('kindeauthid'),
        kindeAuthName: text('kindeauthname'),
        task: text('task').notNull(),
        completed: boolean('completed').default(false),
        createdAt: timestamp('created_at').defaultNow().notNull(),
})
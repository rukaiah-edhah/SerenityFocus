import { pgTable, timestamp, text, serial, integer, boolean } from "drizzle-orm/pg-core";


export const tasks = pgTable('tasks', {
        id: serial('id').primaryKey().notNull(),
        kindeAuthId: text('kindeauthid'),
        kindeAuthName: text('kindeauthname'),
        task: text('task').notNull(),
        completed: boolean('completed').default(false),
        createdAt: timestamp('created_at').defaultNow().notNull(),
})
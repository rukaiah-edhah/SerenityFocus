import { pgTable, timestamp, text, serial } from "drizzle-orm/pg-core";


export const pomodoroStatistics = pgTable('pomodoro_statistics', {
    id: serial('id').primaryKey().notNull(),
    userId: text('user_id').notNull(),
    sessionStart: timestamp('session_start').defaultNow().notNull(),
    sessionEnd: timestamp('session_end'),
    createdAt: timestamp('created_at').defaultNow().notNull(),
});
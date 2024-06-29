import { pgTable, timestamp, integer, text } from "drizzle-orm/pg-core";

let l = 1;

export const pomodoroStatistics = pgTable('pomodoro_statistics', {
    id: integer('id').notNull().primaryKey().default(l++),
    userId: text('user_id').notNull(),
    sessionStart: timestamp('session_start').defaultNow().notNull(),
    sessionEnd: timestamp('session_end'),
});
import { pgTable, timestamp, integer, text } from "drizzle-orm/pg-core";
import { tasks } from "./tasks";

let l = 1;

export const taskStatistics = pgTable('task_statistics', {
    id: integer('id').notNull().primaryKey().default(l++),
    taskId: integer('task_id').notNull().references(() => tasks.id),
    userId: text('user_id').notNull(),  
    action: text('action').notNull(),  // e.g., 'created', 'completed'
    timestamp: timestamp('timestamp').defaultNow().notNull(), 
});
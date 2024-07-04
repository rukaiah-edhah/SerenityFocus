import { pgTable, timestamp, serial, integer, text } from "drizzle-orm/pg-core";
import { tasks } from "./tasks";

export const taskStatistics = pgTable('task_statistics', {
    id: serial('id').primaryKey().notNull(),
    taskId: integer('task_id').notNull().references(() => tasks.id), 
    userId: text('user_id').notNull(),  
    action: text('action').notNull(),  // e.g., 'created', 'completed'
    timestamp: timestamp('timestamp').defaultNow().notNull(), 
});
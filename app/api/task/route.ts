import { NextResponse } from 'next/server';


import { db } from '@/db';
import { tasks } from '@/db/schema/tasks';
import { desc, eq } from 'drizzle-orm';

export async function POST(req: any){
    const { task } = await req.json();
    await db.insert(tasks).values({
        task: task,
        completed: false
    });
    return NextResponse.json({message: 'submitted'}, {status: 201})
}

export async function DELETE(req: any){
    const id = req.nextUrl.searchParams.get('id');
    await db.delete(tasks)
        .where(eq(tasks.id, parseInt(id)));
    return NextResponse.json({ message: 'post deleted'}, { status: 201});
}

export async function GET(req: any){
    const task = await db.select().from(tasks).orderBy(desc(tasks.id));
    return NextResponse.json(task)
}
import { NextResponse } from 'next/server';
import { db } from '@/db';
import { tasks } from '@/db/schema/tasks';
import { desc, eq, and, gte, lte } from 'drizzle-orm';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';

export async function POST(req: any){
    const {getUser} = getKindeServerSession();
    const user = await getUser();

    const { task } = await req.json();

    if (user){
        await db.insert(tasks).values({
            kindeAuthId: user?.id as string,
            kindeAuthName: user?.given_name as string,
            task: task,
            completed: false
        })
    } else {
        await db.insert(tasks).values({
            kindeAuthId: '',
            kindeAuthName: '',
            task: task,
            completed: false
        });
    }
    
    return NextResponse.json({message: 'submitted'}, {status: 201})
}

export async function DELETE(req: any){
    const id = req.nextUrl.searchParams.get('id');
    await db.delete(tasks)
        .where(eq(tasks.id, parseInt(id)));
    return NextResponse.json({ message: 'post deleted'}, { status: 201});
}

const currentDate = new Date();
const startOfDay = new Date(currentDate);
startOfDay.setHours(0, 0, 0, 0);

const endOfDay = new Date(currentDate);
endOfDay.setHours(23, 59, 59, 999);


export async function GET(req: any){
    const {getUser} = getKindeServerSession();
    const user = await getUser();

    let task: any;

    if (user){
        task = await db.select().from(tasks).orderBy(desc(tasks.id)).where(
            and(
                eq(tasks.kindeAuthId, user?.id as string),
                gte(tasks.createdAt, startOfDay),
                lte(tasks.createdAt, endOfDay)
            )
            );
        return NextResponse.json(task)
    } else {
        task = await db.select().from(tasks).orderBy(desc(tasks.id)).where(
            and(
                eq(tasks.kindeAuthId, ''),
                gte(tasks.createdAt, startOfDay),
                lte(tasks.createdAt, endOfDay)
            )
        );
        return NextResponse.json(task)
    }
}
import { NextResponse } from 'next/server';
import { db } from '@/db';
import { pomodoroStatistics } from '@/db/schema/pomodoroStatistics';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { eq } from 'drizzle-orm';

export async function POST(req: any) {
    try {
        const { getUser } = getKindeServerSession();
        const user = await getUser();

        const { sessionStart, sessionEnd } = await req.json();

        if (!sessionStart || (sessionEnd && new Date(sessionEnd) <= new Date(sessionStart))) {
            return NextResponse.json({ message: 'Invalid session times' }, { status: 400 });
        }

        if (user) {
            await db.insert(pomodoroStatistics).values({
                userId: user?.id as string,
                sessionStart,
                sessionEnd
            });
        }

        return NextResponse.json({ message: 'session logged' }, { status: 201 });
    } catch (error) {
        console.error('Error logging session:', error);
        return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
    }
}

export async function GET(req: any) {
    try {
        const { getUser } = getKindeServerSession();
        const user = await getUser();

        if (user) {
            const sessions = await db.select().from(pomodoroStatistics).where(eq(pomodoroStatistics.userId, user?.id as string));
            return NextResponse.json(sessions);
        }

        return NextResponse.json([], { status: 200 });
    } catch (error) {
        console.error('Error fetching sessions:', error);
        return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
    }
}

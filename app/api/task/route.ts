import { NextResponse } from "next/server";
import { db } from "@/db";
import { tasks } from "@/db/schema/tasks";
import { desc, eq, and, gte, lte } from "drizzle-orm";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { taskStatistics } from "@/db/schema/taskStatistics";

export async function POST(req: any) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  const { task } = await req.json();

  if (user) {
    const [newTask] = await db
      .insert(tasks)
      .values({
        kindeAuthId: user?.id as string,
        kindeAuthName: user?.given_name as string,
        task: task,
        completed: false,
      })
      .returning();

    await db.insert(taskStatistics).values({
      taskId: newTask.id,
      userId: user?.id as string,
      action: "created",
      timestamp: new Date(),
    });
  } else {
    const [newTask] = await db
      .insert(tasks)
      .values({
        kindeAuthId: "",
        kindeAuthName: "",
        task: task,
        completed: false,
      })
      .returning();

    await db.insert(taskStatistics).values({
      taskId: newTask.id,
      userId: "",
      action: "created",
      timestamp: new Date(),
    });
  }

  return NextResponse.json({ message: "submitted" }, { status: 201 });
}

export async function DELETE(req: any) {
  try {
    const id = req.nextUrl.searchParams.get("id");

    if (!id) {
      console.error("Task ID is required but not provided");
      return NextResponse.json(
        { message: "Task ID is required" },
        { status: 400 }
      );
    }

    await db
      .delete(taskStatistics)
      .where(eq(taskStatistics.taskId, parseInt(id as string)));

    const result = await db
      .delete(tasks)
      .where(eq(tasks.id, parseInt(id as string)))
      .returning();
      

    if (result.length === 0) {
      console.error(`No task found with id: ${id}`);
      return NextResponse.json({ message: "Task not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Post deleted" }, { status: 201 });
  } catch (error) {
    console.error("Error deleting task:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function PATCH(req: any) {
  try {
    const id = req.nextUrl.searchParams.get("id");

    if (!id) {
      console.error("Task ID is required but not provided");
      return NextResponse.json(
        { message: "Task ID is required" },
        { status: 400 }
      );
    }

    const body = await req.json();
    const { completed } = body;
    console.log(`Updating task with id ${id} to completed: ${completed}`);

    if (typeof completed === "undefined") {
      console.error("Completed status is required but not provided");
      return NextResponse.json(
        { message: "Completed status is required" },
        { status: 400 }
      );
    }

    const result = await db
      .update(tasks)
      .set({ completed })
      .where(eq(tasks.id, parseInt(id as string)))
      .returning();

    if (result.length === 0) {
      console.error(`No task found with id: ${id}`);
      return NextResponse.json({ message: "Task not found" }, { status: 404 });
    }

    const session = getKindeServerSession();
    const user = await session.getUser();

    if (!user) {
      console.error("User is not authenticated");
      return NextResponse.json(
        { message: "User is not authenticated" },
        { status: 401 }
      );
    }

    await db.insert(taskStatistics).values({
      taskId: parseInt(id as string),
      userId: user.id as string,
      action: "completed",
      timestamp: new Date(),
    });

    return NextResponse.json(
      { message: "Task updated", task: result[0] },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating task:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

const currentDate = new Date();
const startOfDay = new Date(currentDate);
startOfDay.setHours(0, 0, 0, 0);

const endOfDay = new Date(currentDate);
endOfDay.setHours(23, 59, 59, 999);

export async function GET(req: any) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  let task: any;

  if (user) {
    task = await db
      .select()
      .from(tasks)
      .orderBy(desc(tasks.id))
      .where(
        and(
          eq(tasks.kindeAuthId, user?.id as string),
          gte(tasks.createdAt, startOfDay),
          lte(tasks.createdAt, endOfDay)
        )
      );
    return NextResponse.json(task);
  } else {
    task = await db
      .select()
      .from(tasks)
      .orderBy(desc(tasks.id))
      .where(
        and(
          eq(tasks.kindeAuthId, ""),
          gte(tasks.createdAt, startOfDay),
          lte(tasks.createdAt, endOfDay)
        )
      );
    return NextResponse.json(task);
  }
}

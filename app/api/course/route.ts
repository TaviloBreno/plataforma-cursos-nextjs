import { NextResponse } from "next/server";
import { currentUser } from "@clerk/nextjs/server";
import prismadb from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const user = await currentUser();

    if (!user || !user.id) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const { courseName, slug, category } = await request.json();

    const course = await prismadb.course.create({
      data: {
        userId: user.id,
        title: courseName,
        slug,
        category, 
      },
    });

    return NextResponse.json(course);
  } catch (error) {
    console.error("[COURSE_POST]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

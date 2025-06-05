import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import prisma from "@/lib/prisma";

export async function PATCH(
  req: Request,
  { params }: { params: { courseId: string } }
) {
  try {
    const { userId } = await auth();
    const { isPublished } = await req.json();
    const courseId = params.courseId;

    if (!userId || !courseId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const course = await prisma.course.update({
      where: {
        id: courseId,
        userId: userId,
      },
      data: {
        isPublished,
      },
    });

    return NextResponse.json(course);
  } catch (error) {
    console.error("[COURSE_PUBLISH]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

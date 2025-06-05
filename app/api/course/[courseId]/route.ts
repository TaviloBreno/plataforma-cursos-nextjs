import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import prismadb from "@/lib/prisma";

export async function DELETE(
  request: Request,
  { params }: { params: { courseId: string } }
) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const courseId = params.courseId;

    const course = await prismadb.course.deleteMany({
      where: {
        id: courseId,
        userId,
      },
    });

    return NextResponse.json(course);
  } catch (error) {
    console.log("[COURSE_DELETE]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

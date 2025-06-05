import { NextResponse } from "next/server";
import { currentUser } from "@clerk/nextjs/server";
import prisma from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const user = await currentUser();

    if (!user || !user.id) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const { courseName, slug } = await request.json();

    const course = await prisma.course.create({
      data: {
        title: courseName,
        slug,
        userId: user.id,
        category: "", // ou algum valor default se o campo for obrigatório
      },
    });

    return NextResponse.json(course);
  } catch (error) {
    console.error("[COURSE_CREATE]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

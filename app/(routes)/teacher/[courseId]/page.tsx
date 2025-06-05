import { auth } from "@clerk/nextjs/server";
import prisma from "@/lib/prisma";
import { HeaderCourse } from "./components/HeaderCourse";

interface Params {
    courseId: string;
}

export default async function CoursePage({ params }: { params: Params }) {
    const user = await auth();
    const userId = user?.userId;

    if (!userId) {
        return <p>No tienes permisos para ver este curso</p>;
    }

    const course = await prisma.course.findUnique({
        where: {
            id: params.courseId,
            userId,
        },
        include: {
            chapters: true,
        },
    });

    if (!course) {
        return <p>Este curso no existe</p>;
    }

    return (
        <div className="mt-6">
            <HeaderCourse
                courseId={course.id}
                isPublished={course.isPublished}
            />
        </div>
    );
}

import { currentUser } from "@clerk/nextjs/server";
import prisma from "@/lib/prisma";
import { Header } from "./components/Header/Header";
import { ListCourses } from "./components/ListCourses";

export default async function TeacherPage() {
    const user = await currentUser();

    if (!user) {
        return <p>Not signed in</p>;
    }

    const courses = await prisma.course.findMany({
        where: {
            userId: user.id,
        },
    });

    console.log(courses);

    return (
        <div>
            <Header />
            <ListCourses courses={courses} />
        </div>
    );
}

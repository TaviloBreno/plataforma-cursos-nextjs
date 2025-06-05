import { currentUser } from "@clerk/nextjs/server";
import prismadb from "@/lib/prisma";

export default async function TeacherPage() {
    const user = await currentUser();

    if (!user) return <p>Not signed in</p>;

    const courses = await prismadb.course.findMany({
        where: {
            userId: user.id
        }
    });

    console.log(courses);

    return (
        <div>
            <h1>Teacher Page</h1>
        </div>
    );
}

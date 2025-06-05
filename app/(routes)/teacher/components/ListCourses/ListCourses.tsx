import { CourseCard } from "../CourseCard";
import { ListCoursesProps } from "./ListCourses.types";

export function ListCourses({ courses }: ListCoursesProps) {
    if (courses.length === 0) {
        return <p>Não há cursos criados.</p>;
    }

    return (
        <div className="flex flex-col my-4 mx-6 border rounded-lg bg-white p-4 gap-10">
            {courses.map((course) => (
                <div key={course.id}>
                    <CourseCard course={course} />
                </div>
            ))}
        </div>
    );
}

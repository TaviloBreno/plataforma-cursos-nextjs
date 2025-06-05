import { ListCoursesProps } from "./ListCourses.types";

export function ListCourses({ courses }: ListCoursesProps) {
    if (courses.length === 0) {
        return <p>Não há cursos criados.</p>;
    }

    return (
        <div className="flex flex-col my-4 mx-6 border rounded-lg bg-white p-4 gap-10">
            {courses.map((course) => (
                <div key={course.id}>
                    <p className="text-lg font-medium">{course.title}</p>
                    <div className="border-t border-gray-200 w-full mt-4" />
                </div>
            ))}
        </div>
    );
}

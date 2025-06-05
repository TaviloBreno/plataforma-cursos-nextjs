interface CoursePageProps {
    params: { courseSlug: string };
}

export default async function CourseSlugPage({ params }: CoursePageProps) {
    return (
        <p>
            O slug do curso é: <strong>{params.courseSlug}</strong>
        </p>
    );
}
  
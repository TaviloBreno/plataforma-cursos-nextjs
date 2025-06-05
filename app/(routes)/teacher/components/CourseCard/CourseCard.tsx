import Image from "next/image";
import { DollarSign } from "lucide-react";
import type { CourseCardProps } from "./CourseCard.types";

export function CourseCard({ course }: CourseCardProps) {
    const { title, price, imageUrl, description, isPublished } = course;

    return (
        <div className="relative">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
                <div className="flex flex-col md:flex-row gap-4 items-start">
                    <Image
                        src={imageUrl || "/default-image-course.jpg"}
                        alt="Curso"
                        width={150}
                        height={150}
                        className="rounded-md max-w-[208px]"
                    />

                    <div>
                        <div className="flex items-center gap-2">
                            <h2 className="text-xl font-medium">{title}</h2>
                            {isPublished ? (
                                <span className="inline-block bg-emerald-100 text-emerald-600 text-xs font-medium px-2 py-1 rounded-md mt-1">
                                    Publicado
                                </span>
                            ) : (
                                <span className="inline-block bg-gray-100 text-gray-600 text-xs font-medium px-2 py-1 rounded-md mt-1">
                                    Sin publicar
                                </span>
                            )}
                        </div>

                        {description && (
                            <p className="text-gray-400 w-full max-w-lg line-clamp-1 text-sm">
                                {description}
                            </p>
                        )}
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-4 items-center">
                    <div className="flex gap-1 items-center text-sm mt-2">
                        <DollarSign className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-400">Precio:</span>
                        <span className="font-semibold">{price ?? 0}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

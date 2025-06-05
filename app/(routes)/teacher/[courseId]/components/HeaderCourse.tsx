"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { MoveLeft, Eye, EyeOff, Trash } from "lucide-react";
import axios from "axios";
import { toast } from "sonner"; // ou react-hot-toast, dependendo do seu projeto

interface HeaderCourseProps {
    courseId: string;
    isPublished: boolean;
}

export function HeaderCourse({ courseId, isPublished }: HeaderCourseProps) {
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleBack = () => router.push("/teacher");

    const togglePublish = async () => {
        try {
            setIsLoading(true);

            await axios.patch(`/api/course/${courseId}/publish`, {
                isPublished: !isPublished,
            });

            toast.success(`Curso ${isPublished ? "despublicado" : "publicado"} com sucesso!`);
            router.refresh(); // recarrega os dados do curso
        } catch {
            toast.error("Erro ao atualizar o status do curso");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="mb-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
                <Button variant="outline" onClick={handleBack}>
                    <MoveLeft className="h-4 w-4 mr-2" />
                    Volver a todos los cursos
                </Button>

                <div className="flex items-center gap-2">
                    <Button
                        variant="outline"
                        disabled={isLoading}
                        onClick={togglePublish}
                    >
                        {isPublished ? (
                            <>
                                <EyeOff className="h-4 w-4 mr-2" />
                                Despublicar
                            </>
                        ) : (
                            <>
                                <Eye className="h-4 w-4 mr-2" />
                                Publicar
                            </>
                        )}
                    </Button>

                    <Button
                        variant="destructive"
                        disabled={isLoading}
                        onClick={() => console.log("Eliminar curso")}
                    >
                        <Trash className="h-4 w-4 mr-2" />
                        Eliminar
                    </Button>
                </div>
            </div>
        </div>
    );
}

"use client";

import { useRouter } from "next/navigation";
import { Pencil, Trash } from "lucide-react";
import {
    AlertDialog,
    AlertDialogTrigger,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogCancel,
    AlertDialogAction
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

interface ActionsProps {
    courseId: string;
}

export function Actions({ courseId }: ActionsProps) {
    const router = useRouter();

    const onEdit = () => {
        router.push(`/teacher/course/${courseId}`);
    };

    return (
        <div className="flex flex-col gap-2 items-center w-full max-w-[168px]">
            <Button
                onClick={onEdit}
                variant="outline"
                className="w-full"
            >
                <Pencil className="w-4 h-4 mr-2" />
                Editar
            </Button>

            <AlertDialog>
                <AlertDialogTrigger asChild>
                    <Button
                        variant="outline"
                        className="w-full text-red-500 border-red-500 hover:bg-red-100 hover:text-red-500"
                    >
                        <Trash className="w-4 h-4 mr-2" />
                        Eliminar
                    </Button>
                </AlertDialogTrigger>

                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>¿Estás seguro?</AlertDialogTitle>
                        <AlertDialogDescription>
                            Esto eliminará el curso y todos sus datos.
                        </AlertDialogDescription>
                    </AlertDialogHeader>

                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancelar</AlertDialogCancel>
                        <AlertDialogAction>Continuar</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    );
}

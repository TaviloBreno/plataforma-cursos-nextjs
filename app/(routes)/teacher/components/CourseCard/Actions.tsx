"use client";

import { useRouter } from "next/navigation";
import { toast } from "sonner";
import axios from "axios";
import { Pencil, Trash } from "lucide-react";
import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogTitle, AlertDialogDescription, AlertDialogCancel, AlertDialogAction } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

interface ActionsProps {
    courseId: string;
}

export function Actions({ courseId }: ActionsProps) {
    const router = useRouter();

    const onEdit = () => {
        router.push(`/teacher/${courseId}`);
    };

    const onDelete = async () => {
        try {
            await axios.delete(`/api/course/${courseId}`);
            toast.success("Curso eliminado correctamente");
            router.refresh();
        } catch {
            toast.error("Erro ao eliminar o curso");
        }
    };

    return (
        <div className="flex flex-col gap-2 items-center w-full max-w-[168px]">
            <Button onClick={onEdit} variant="default" className="w-full">
                <Pencil className="w-4 h-4 mr-2" />
                Editar
            </Button>

            <AlertDialog>
                <AlertDialogTrigger asChild>
                    <Button variant="outline" className="w-full text-red-500 border-red-500 hover:bg-red-100 hover:text-red-600">
                        <Trash className="w-4 h-4 mr-2" />
                        Eliminar
                    </Button>
                </AlertDialogTrigger>

                <AlertDialogContent>
                    <AlertDialogTitle>Tem certeza?</AlertDialogTitle>
                    <AlertDialogDescription>
                        Isso apagará o curso e todos os dados associados. Esta ação não pode ser desfeita.
                    </AlertDialogDescription>
                    <div className="flex justify-end gap-2 mt-4">
                        <AlertDialogCancel>Cancelar</AlertDialogCancel>
                        <AlertDialogAction onClick={onDelete}>Continuar</AlertDialogAction>
                    </div>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    );
}

"use client";

import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@radix-ui/react-dialog";
import { Button } from "@/components/ui/button";
import { Slash } from "lucide-react";
import { FormCreateCourse } from "./form-create-course/FormCreateCourse";

export function Header() {
    return (
        <div className="my-4 mx-6 border rounded-lg bg-white">
            <div className="flex justify-between items-center px-6 py-4">
                <h2 className="text-2xl">Teacher Mode</h2>

                <Dialog>
                    <DialogTrigger asChild>
                        <Button>
                            <Slash className="w-4 h-4 mr-2" />
                            Criar curso
                        </Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogTitle>Crea tu curso</DialogTitle>
                        <FormCreateCourse />
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    );
}

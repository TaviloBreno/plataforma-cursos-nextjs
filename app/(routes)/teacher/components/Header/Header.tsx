"use client";

import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Slash } from "lucide-react";
import { FormCreateCourse } from "./../FormCreateCourse/FormCreateCourse";

export function Header() {
    return (
        <div className="my-4 mx-6 border rounded-y bg-white">
            <div className="flex justify-between items-center py-4 px-6">
                <h1 className="text-2xl">Teacher Mode</h1>

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

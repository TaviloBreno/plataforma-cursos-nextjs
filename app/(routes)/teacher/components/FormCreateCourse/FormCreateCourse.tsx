"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { formSchema } from "./FormCreateCourse.form";
import { z } from "zod";
import { toast } from "sonner"; // Supondo que está usando 'sonner' para feedback
import { useRouter } from "next/navigation";

export function FormCreateCourse() {
    const router = useRouter();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            courseName: "",
            slug: "",
        },
    });

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            const response = await axios.post("/api/course", values);
            toast.success("Curso criado com sucesso 🎉");
            router.push(`/teacher/${response.data.id}`);
        } catch (error) {
            console.error("Erro ao criar curso:", error);
            toast.error("Erro ao criar o curso 🚨");
        }
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-4">
                <FormField
                    control={form.control}
                    name="courseName"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Nome do Curso</FormLabel>
                            <FormControl>
                                <Input placeholder="Curso de ReactJS" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="slug"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Slug do Curso</FormLabel>
                            <FormControl>
                                <Input placeholder="curso-reactjs" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button type="submit">Criar Curso</Button>
            </form>
        </Form>
    );
}

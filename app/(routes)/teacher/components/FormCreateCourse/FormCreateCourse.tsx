"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { formSchema } from "./FormCreateCourse.form";
import { z } from "zod";

type FormValues = z.infer<typeof formSchema>;

export function FormCreateCourse() {
    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            courseName: "",
            slug: "",
        },
    });

    function onSubmit(values: FormValues) {
        console.log("Form Values:", values);
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-4">
                <FormField
                    control={form.control}
                    name="courseName"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Nome do curso</FormLabel>
                            <FormControl>
                                <Input placeholder="Curso de React JS" {...field} />
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
                            <FormLabel>Slug do curso</FormLabel>
                            <FormControl>
                                <Input placeholder="curso-react-js" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button type="submit" className="mt-4">
                    Criar curso
                </Button>
            </form>
        </Form>
    );
}

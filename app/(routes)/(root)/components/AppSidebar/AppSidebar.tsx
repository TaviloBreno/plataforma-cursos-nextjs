"use client";

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubItem,
    SidebarMenuSubButton,
    useSidebar,
} from "@/components/ui/sidebar";

import Link from "next/link";
import Image from "next/image";
import { routes, routesTeacher } from "./AppSidebarData";

export function AppSidebar() {
    const { state } = useSidebar();

    return (
        <Sidebar>
            <SidebarContent className="bg-white">
                <SidebarHeader>
                    <Link href="/" className="flex flex-row items-center gap-2">
                        <Image
                            src="/img/logo-removebg-preview.png"
                            alt="Logo Academia"
                            width={35}
                            height={35}
                        />
                        {state === "expanded" && (
                            <span className="text-sm font-semibold text-gray-800 tracking-wide">
                                Tarre LMS
                            </span>
                        )}
                    </Link>
                </SidebarHeader>

                {/* Grupo Plataforma */}
                <SidebarGroup>
                    <SidebarGroupLabel>Plataforma</SidebarGroupLabel>
                    <SidebarMenu className="space-y-2">
                        {routes.map((item) => (
                            <SidebarMenuItem key={item.title}>
                                <SidebarMenuButton asChild>
                                    <Link href={item.url} className="flex items-center space-x-2">
                                        <div className="p-1 rounded-lg bg-violet-400 text-white">
                                            <item.icon className="w-4 h-4" />
                                        </div>
                                        {state === "expanded" && <span>{item.title}</span>}
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        ))}
                    </SidebarMenu>
                </SidebarGroup>

                {/* Grupo Professor */}
                <SidebarMenu className="mt-4">
                    <SidebarGroupLabel>Professor</SidebarGroupLabel>
                    <SidebarMenuSub>
                        {routesTeacher.map((item) => (
                            <SidebarMenuSubItem key={item.title}>
                                <SidebarMenuSubButton asChild>
                                    <Link
                                        href={item.url}
                                        className="flex items-center gap-2 hover:bg-muted transition px-2 py-1 rounded-lg"
                                    >
                                        <div className="p-1 rounded-lg text-white bg-slate-400">
                                            <item.icon className="w-4 h-4" />
                                        </div>
                                        {state === "expanded" && <span>{item.title}</span>}
                                    </Link>
                                </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                        ))}
                    </SidebarMenuSub>
                </SidebarMenu>
            </SidebarContent>
        </Sidebar>
    );
}

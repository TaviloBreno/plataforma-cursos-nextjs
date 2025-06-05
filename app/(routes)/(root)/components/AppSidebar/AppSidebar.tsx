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
    useSidebar
} from "@/components/ui/sidebar";

import Link from "next/link";
import { routes } from "./AppSidebarData";

export function AppSidebar() {
    const { state } = useSidebar();

    return (
        <Sidebar>
            <SidebarContent className="bg-white">
                <SidebarHeader>
                    <Link href="/" className="flex flex-row items-center space-x-2">
                        <span className="text-xl font-bold text-purple-700">Red LMS</span>
                    </Link>
                </SidebarHeader>

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
                                        {state === "expanded" && (
                                            <span>{item.title}</span>
                                        )}
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        ))}
                    </SidebarMenu>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    );
}

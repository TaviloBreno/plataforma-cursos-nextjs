"use client";

import { BellRing, LogIn, Search } from "lucide-react";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Navbar() {
    return (
        <nav className="flex justify-between items-center px-4 py-4 border-b bg-white h-16">
            {/* Trigger */}
            <SidebarTrigger />

            {/* Ações (busca, notificações, login/usuário) */}
            <div className="flex items-center gap-4">
                <div className="flex items-center w-full max-w-sm border border-gray-300 rounded-lg px-2.5 py-0.5">
                    <Search className="w-4 h-4 mr-2 text-gray-500" />
                    <Input
                        type="search"
                        placeholder="Buscar"
                        className="w-full border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                    />
                </div>

                <Button variant="outline">
                    <BellRing className="w-4 h-4" />
                </Button>

                <SignedOut>
                    <SignInButton mode="modal">
                        <Button variant="outline">
                            <LogIn className="w-4 h-4 mr-2" />
                            Iniciar sessão
                        </Button>
                    </SignInButton>
                </SignedOut>

                <SignedIn>
                    <UserButton afterSignOutUrl="/" />
                </SignedIn>
            </div>
        </nav>
    );
}

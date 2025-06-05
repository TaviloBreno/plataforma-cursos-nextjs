import type { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
    return (
        <div className="w-full min-h-screen">
            <div className="flex items-center justify-center w-full h-full relative">
                {/* Fundo gradiente */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-amber-200 to-yellow-400 z-[-1]" />

                {/* Conteúdo da página (login) */}
                {children}
            </div>
        </div>
    );
}
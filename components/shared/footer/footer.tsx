"use client";

import Link from "next/link";

export function Footer() {
    return (
        <footer className="w-full bg-white border-t px-6 py-4">
            <div className="flex justify-between items-center text-sm text-slate-500">
                <p>© 2025 Tarre LMS</p>
                <div className="flex items-center gap-2">
                    <Link href="/privacy-policy" className="hover:underline">
                        Privacidade
                    </Link>
                    <Link href="/terms" className="hover:underline">
                        Termos de uso
                    </Link>
                </div>
            </div>
        </footer>
    );
}

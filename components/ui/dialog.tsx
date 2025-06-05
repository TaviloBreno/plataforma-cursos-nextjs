"use client"

import * as DialogPrimitive from "@radix-ui/react-dialog"
import { X } from "lucide-react"

export const Dialog = DialogPrimitive.Root
export const DialogTrigger = DialogPrimitive.Trigger
export const DialogClose = DialogPrimitive.Close

export function DialogContent({ children }: { children: React.ReactNode }) {
    return (
        <DialogPrimitive.Portal>
            <DialogPrimitive.Overlay className="fixed inset-0 bg-black/30 backdrop-blur-sm" />
            <DialogPrimitive.Content className="fixed left-1/2 top-1/2 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg">
                {children}
                <DialogPrimitive.Close className="absolute top-3 right-3 text-gray-500 hover:text-black">
                    <X className="w-4 h-4" />
                </DialogPrimitive.Close>
            </DialogPrimitive.Content>
        </DialogPrimitive.Portal>
    )
}

export function DialogTitle({ children }: { children: React.ReactNode }) {
    return <h2 className="text-lg font-semibold mb-4">{children}</h2>
}

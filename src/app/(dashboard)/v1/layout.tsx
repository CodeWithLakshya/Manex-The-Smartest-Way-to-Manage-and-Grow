import { Toolbar } from "@mui/material"
import { ReactNode } from "react"

export default function DashboardLayout({ children }: { children: ReactNode }) {
    return (
        <div className="flex h-screen w-screen p-2 box-border">
            {/* Sidebar */}
            <aside className="w-64 border-2 rounded-xl bg-[var(--primary)] text-[var(--textPrimary)]">Sidebar</aside>
            <div className="flex flex-col flex-1 p-2">
                {/* Header */}
                <header>Header</header>
                {/* Page Content */}
                <main className="flex-1">{children}</main>
            </div>
        </div>
    );
}

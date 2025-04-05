"use client"
import AppBarComponent from "@/components/Dashboard/AppBarComponent"
import BreadcrumbComponent from "@/components/Dashboard/BreadcrumbComponent"
import DrawerComponent from "@/components/Dashboard/DrawerComponent"
import { Typography } from "@mui/material"
import { ReactNode } from "react"

export default function DashboardLayout({ children }: { children: ReactNode; }) {
    return (
        <div className="flex h-screen w-screen relative">
            <DrawerComponent />
            <main
                style={{ flexGrow: 1, backgroundColor: 'var(--backgroundDefault)', overflowY: 'hidden', maxHeight: '100vh' }}
            >
                <AppBarComponent />
                <Typography
                    component={"div"}
                    sx={{ overflowY: 'auto', maxHeight: 'calc(100vh - 64px)', padding: 2 }}
                >
                    <BreadcrumbComponent />
                    {children}
                </Typography>
            </main>
        </div>
    );
}

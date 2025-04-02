"use client"
import DrawerComponent from "@/components/Dashboard/DrawerComponent"
import { Typography } from "@mui/material"
import { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode; }) {

    return (
        <div className="flex h-screen w-screen relative">
            {/* <CssBaseline /> */}
            <DrawerComponent />
            <main style={{ flexGrow: 1, padding: 2, backgroundColor: 'var(--backgroundDefault)', overflowY: 'auto', maxHeight: '100vh' }}>
                {/* <Typography component="div"> */}
                {children}
                {/* </Typography> */}
                {/* Main content goes here */}
            </main>
        </div>
    );
}

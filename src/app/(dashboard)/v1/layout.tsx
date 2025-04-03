"use client"
import BreadcrumbComponent from "@/components/Dashboard/BreadcrumbComponent";
import DrawerComponent from "@/components/Dashboard/DrawerComponent"
import { Message, Notifications } from "@mui/icons-material";
import { AppBar, Breadcrumbs, Button, IconButton, Link, TextField, Toolbar, Typography } from "@mui/material"
import { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode; }) {

    return (
        <div className="flex h-screen w-screen relative">
            {/* <CssBaseline /> */}
            <DrawerComponent />
            <main style={{ flexGrow: 1, backgroundColor: 'var(--backgroundDefault)', overflowY: 'hidden', maxHeight: '100vh' }}>
                <AppBar position="static" sx={{ backgroundColor: 'var(--background)', color: 'var(--foreground)' }}>
                    <Toolbar>
                        <TextField
                            variant="outlined"
                            placeholder="Search..."
                            sx={{ marginRight: 'auto', backgroundColor: 'var(--backgroundPaper)', color: 'var(--textPrimary)' }}
                        />
                        <IconButton sx={{ color: 'var(--textPrimary)', marginRight: '8px' }}>
                            <Notifications />
                        </IconButton>
                        <IconButton sx={{ color: 'var(--textPrimary)' }}>
                            <Message />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <Typography component={"div"} sx={{ overflowY: 'auto', maxHeight: 'calc(100vh - 64px)', padding: 2 }}>
                    <BreadcrumbComponent />
                    {children}
                </Typography>
            </main>
        </div>
    );
}

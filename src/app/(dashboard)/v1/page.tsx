import { Breadcrumbs, Link, Typography } from "@mui/material"
import { NavigateNext } from "@mui/icons-material"

export default function DashboardPage() {
    const breadcrumbs = [
        <Link underline="hover" key="1" color="inherit" href="/">
            Manex
        </Link>,
        <Link underline="hover" key="2" color="inherit" href="/material-ui/getting-started/installation/">
            Core
        </Link>,
        <Typography key="3" sx={{ color: 'text.primary' }}>
            Breadcrumb
        </Typography>,
    ];
    
    return (
        <div>
            <Breadcrumbs separator={<NavigateNext fontSize="small" />} aria-label="breadcrumb">
                {breadcrumbs}
            </Breadcrumbs>
            <h1 className="text-2xl font-bold">Dashboard Overview</h1>
            <p>Welcome to your dashboard!</p>
        </div>
    );
}

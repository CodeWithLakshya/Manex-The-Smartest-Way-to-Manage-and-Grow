"use client"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import AdbIcon from '@mui/icons-material/Adb';
import { Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Apps, Inbox, Info, Mail, SupportAgent } from '@mui/icons-material';
import { useRouter } from 'next/navigation';

const pages = [
    {
        name: 'Features',
        slug: 'features',
        pageRoute: '/features',
        icon: Apps
    },
    {
        name: 'About',
        slug: 'about',
        pageRoute: '/about',
        icon: Info
    },
    {
        name: 'Support',
        slug: 'support',
        pageRoute: '/support',
        icon: SupportAgent
    }];

const NavigationBar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const router = useRouter()

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const navigateToPage = (pageRoute: string) => {
        handleCloseNavMenu();
        router.replace(pageRoute);
    }

    const drawer = (
        <div className='w-[15em]'>
            <Toolbar />
            <Divider />
            <List>
                {pages.map((text) => (
                    <ListItem key={text.slug} disablePadding onClick={() => navigateToPage(text.pageRoute)}>
                        <ListItemButton>
                            <ListItemIcon>
                                <text.icon />
                            </ListItemIcon>
                            <ListItemText primary={text.name} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </div>
    );

    return (
        <AppBar position="fixed">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        onClick={() => router.replace("/")}
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            cursor: 'pointer'
                        }}
                    >
                        MANEX
                    </Typography>
                    <Box sx={{ flexGrow: 0, pr: "8px", display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Drawer
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            anchor='left'
                            variant='temporary'
                            ModalProps={{
                                keepMounted: false,
                            }}
                            id="menu-appbar"
                            sx={{ display: { xs: 'block', md: 'none' }, width: '30vw' }}
                        >
                            {drawer}
                        </Drawer>
                    </Box>
                    <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        onClick={() => router.replace("/")}
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            cursor: 'pointer'
                        }}
                    >
                        MANEX
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page.slug}
                                onClick={() => navigateToPage(page.pageRoute)}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {page.name}
                            </Button>
                        ))}
                    </Box>
                    <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
                        <Button
                            variant="outlined"
                            onClick={() => router.replace('/login')} sx={{ color: "white", border: 2, borderRadius: "15px", mr: 1 }}
                        >
                            Login
                        </Button>
                        <Button
                            variant="outlined"
                            onClick={() => router.replace('/signup')}
                            sx={{ color: "white", border: 2, borderRadius: "15px" }}
                        >
                            Sign Up
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default NavigationBar;
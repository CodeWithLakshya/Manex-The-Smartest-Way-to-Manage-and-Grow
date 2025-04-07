"use client"
import { Assignment, AssignmentTurnedIn, Dashboard, Group, Logout, People, Person, Settings } from '@mui/icons-material'
import { Button, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Menu, MenuItem, Typography } from '@mui/material'
import { useRouter } from 'next/navigation'
import React, { useState, MouseEvent } from 'react'

const DrawerComponent: React.FC = () => {
    const drawerWidth = 240
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const router = useRouter()
    const handleMenuClick = (event: MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
            >
                <Typography component={"div"}>
                    <Typography variant="h5" sx={{ padding: 2 }} fontWeight="bold" color="var(--textPrimary)">Manex</Typography>
                    <Divider sx={{ marginTop: 'auto' }} />
                </Typography>
                <div>
                    <List>
                        <ListItem onClick={()=>{router.replace('/v1')}} component={"button"} sx={{ '&:hover': { backgroundColor: 'var(--hoverBackground)', color: 'var(--hoverText)' } }}>
                            <ListItemIcon>
                                <Dashboard />
                            </ListItemIcon>
                            <ListItemText primary="Dashboard" />
                        </ListItem>
                        <ListItem onClick={()=>{router.replace('/v1/tasks')}} component={"button"} sx={{ '&:hover': { backgroundColor: 'var(--hoverBackground)', color: 'var(--hoverText)' } }}>
                            <ListItemIcon>
                                <Assignment />
                            </ListItemIcon>
                            <ListItemText primary="Tasks" />
                        </ListItem>
                        <ListItem component={"button"} sx={{ '&:hover': { backgroundColor: 'var(--hoverBackground)', color: 'var(--hoverText)' } }}>
                            <ListItemIcon>
                                <AssignmentTurnedIn />
                            </ListItemIcon>
                            <ListItemText primary="Assignments" />
                        </ListItem>
                        <ListItem onClick={()=>{router.replace('/v1/clients')}} component={"button"} sx={{ '&:hover': { backgroundColor: 'var(--hoverBackground)', color: 'var(--hoverText)' } }}>
                            <ListItemIcon>
                                <People />
                            </ListItemIcon>
                            <ListItemText primary="Clients" />
                        </ListItem>
                        <ListItem component={"button"} sx={{ '&:hover': { backgroundColor: 'var(--hoverBackground)', color: 'var(--hoverText)' } }}>
                            <ListItemIcon>
                                <Group />
                            </ListItemIcon>
                            <ListItemText primary="Staff Members" />
                        </ListItem>
                    </List>
                </div>
                <Divider sx={{ marginTop: 'auto' }} />
                <div style={{ padding: '16px' }}>
                    <Button
                        variant="outlined"
                        sx={{ marginTop: '8px', width: '100%' }}
                        onClick={handleMenuClick}
                        startIcon={<Settings />}
                    >
                        User Options
                    </Button>
                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleMenuClose}
                        PaperProps={{ style: { width: drawerWidth - 30, maxWidth: 'none' } }} // Set menu width to match button width
                    >
                        <MenuItem onClick={handleMenuClose}>
                            <ListItemIcon>
                                <Person fontSize="small" />
                            </ListItemIcon>
                            <ListItemText>Profile</ListItemText>
                        </MenuItem>
                        <MenuItem onClick={handleMenuClose}>
                            <ListItemIcon>
                                <Settings fontSize="small" />
                            </ListItemIcon>
                            <ListItemText>Settings</ListItemText>
                        </MenuItem>
                        <MenuItem onClick={handleMenuClose}>
                            <ListItemIcon>
                                <Logout fontSize="small" />
                            </ListItemIcon>
                            <ListItemText>Logout</ListItemText>
                        </MenuItem>
                    </Menu>
                </div>
            </Drawer>
        </>
    )
}

export default DrawerComponent
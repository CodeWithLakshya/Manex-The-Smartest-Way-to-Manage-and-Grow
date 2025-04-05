"use client"
import { Message, Notifications } from '@mui/icons-material';
import { AppBar, IconButton, TextField, Toolbar } from '@mui/material';
import React, { useState } from 'react';

const AppBarComponent: React.FC = () => {
    const [searchValue, setSearchValue] = useState('');

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value);
    };

    return (
        <AppBar position="static" sx={{ backgroundColor: 'var(--background)', color: 'var(--foreground)' }}>
            <Toolbar>
                <TextField
                    variant="outlined"
                    placeholder="Search..."
                    value={searchValue}
                    onChange={handleSearchChange}
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
    );
}

export default AppBarComponent;
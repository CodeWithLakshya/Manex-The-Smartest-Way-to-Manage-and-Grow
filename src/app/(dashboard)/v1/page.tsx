"use client";
import React, { useEffect, useState } from 'react';
import { Typography, Paper, Box, Table, TableBody, TableCell, TableHead, TableRow, Card, CardContent, TextField, Button } from '@mui/material';
import NoOfClients from '@/components/Dashboard/Charts/NoOfClients';
import CardsComponent from '@/components/Dashboard/Home/CardsComponent';
import Top5ClientsTable from '@/components/Dashboard/Home/Top5ClientsTableComponent';
import Top5ServicesComponent from '@/components/Dashboard/Home/Top5ServicesComponent';
import ServicesRevenuesPieChart from '@/components/Dashboard/Charts/ServicesRevenuesPieChart';
import SingleUserEfficiencyChart from '@/components/Dashboard/Charts/SingleUserEfficiencyChart';
import UserEfficiencyChart from '@/components/Dashboard/Charts/UserEfficiencyChart';

const DashboardPage: React.FC = () => {
    const [greeting, setGreeting] = useState<string>('');
    const [filter, setFilter] = useState<string>('');
    const [startDate, setStartDate] = useState<string>('');
    const [endDate, setEndDate] = useState<string>('');

    useEffect(() => {
        const currentHour: number = new Date().getHours();
        if (currentHour < 12) {
            setGreeting("Good Morning");
        } else if (currentHour < 18) {
            setGreeting("Good Afternoon");
        } else if (currentHour < 22) {
            setGreeting("Good Evening");
        } else {
            setGreeting("Good Night");
        }
    }, []);

    const handleFilter = () => {
        // Logic to filter based on startDate and endDate
    };

    return (
        <div className="flex">
            <Box className="flex-1 p-0">
                <Typography variant="h4" component="h1" gutterBottom>
                    {greeting}! Welcome User!!
                </Typography>

                {/* KPI Cards */}
                <CardsComponent />

                <Box className="w-full mt-4 space-y-4">
                    {/* Section Header */}
                    <Typography variant="h5" sx={{ color: 'var(--textPrimary)', fontWeight: 600 }}>
                        Clients Overview
                    </Typography>

                    {/* Top 5 Clients Table and Clients Trend Chart */}
                    <Box className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Top 5 Clients Table */} <Top5ClientsTable />
                        {/* Clients Trend Chart */} <NoOfClients />
                    </Box>

                    {/* Top 5 Services Table and Distribution of Revenue by Service Category */}
                    <Box className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Top 5 Services Table */} <Top5ServicesComponent />
                        {/* All Services Pie Chart based on Revenues */} <ServicesRevenuesPieChart />
                    </Box>

                    <Box className="grid grid-cols-1 md:grid-cols-1 gap-6">
                        {/* Top 5 Services Table */} <UserEfficiencyChart />
                    </Box>

                    {/* For User - Partner, Staff, Article */}
                    <Box className="grid grid-cols-1 md:grid-cols-1 gap-6">
                        {/* Top 5 Services Table */} <SingleUserEfficiencyChart />
                    </Box>
                </Box>
            </Box>

            <Box className="w-full md:w-1/4 p-4 bg-[var(--backgroundPaper)] rounded-2xl ml-4">
                <Paper
                    elevation={3}
                    className="p-6 rounded-xl"
                    sx={{ backgroundColor: 'var(--backgroundPaper)' }}
                >
                    <Typography
                        variant="h5"
                        align="center"
                        gutterBottom
                        sx={{ color: 'var(--textPrimary)', fontWeight: 600 }}
                    >
                        Filter Options
                    </Typography>

                    <div className="flex flex-col gap-5 my-6">
                        <TextField
                            label="Start Date"
                            type="date"
                            variant="outlined"
                            fullWidth
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                            InputLabelProps={{ shrink: true }}
                            sx={{
                                '& label': { color: 'var(--textSecondary)' },
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': { borderColor: 'var(--primary)' },
                                    '&:hover fieldset': { borderColor: 'var(--textSecondaryHover)' },
                                    '&.Mui-focused fieldset': { borderColor: 'var(--secondary)' },
                                },
                            }}
                        />

                        <TextField
                            label="End Date"
                            type="date"
                            variant="outlined"
                            fullWidth
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                            InputLabelProps={{ shrink: true }}
                            sx={{
                                '& label': { color: 'var(--textSecondary)' },
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': { borderColor: 'var(--primary)' },
                                    '&:hover fieldset': { borderColor: 'var(--textSecondaryHover)' },
                                    '&.Mui-focused fieldset': { borderColor: 'var(--secondary)' },
                                },
                            }}
                        />
                    </div>

                    <Button
                        variant="contained"
                        fullWidth
                        onClick={handleFilter}
                        className="mt-6"
                        sx={{
                            backgroundColor: 'var(--primary)',
                            '&:hover': {
                                backgroundColor: 'var(--hoverBackground)',
                                color: 'var(--hoverText)',
                            },
                            color: 'white',
                            fontWeight: 600,
                            textTransform: 'none',
                            borderRadius: '8px',
                        }}
                    >
                        Apply Filters
                    </Button>
                </Paper>
            </Box>
        </div>
    );
}

export default DashboardPage;
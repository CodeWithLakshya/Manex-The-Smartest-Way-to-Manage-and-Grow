"use client"
import { Box, FormControl, InputLabel, MenuItem, Paper, Select, Typography } from '@mui/material';
import React, { useState } from 'react'
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const NoOfClients: React.FC = () => {

    const data = {
        yoy: [
            { year: '2021', clients: 130 },
            { year: '2022', clients: 145 },
            { year: '2023', clients: 160 },
            { year: '2024', clients: 180 },
        ],
        pop: [
            { period: 'Q1', clients: 20 },
            { period: 'Q2', clients: 35 },
            { period: 'Q3', clients: 25 },
            { period: 'Q4', clients: 40 },
        ],
        mom: [
            { month: 'Jan', clients: 10 },
            { month: 'Feb', clients: 12 },
            { month: 'Mar', clients: 15 },
            { month: 'Apr', clients: 14 },
            { month: 'May', clients: 20 },
            { month: 'Jun', clients: 12 },
            { month: 'July', clients: 15 },
            { month: 'Aug', clients: 14 },
            { month: 'Sep', clients: 20 },
            { month: 'Oct', clients: 12 },
            { month: 'Nov', clients: 15 },
            { month: 'Dec', clients: 14 }
        ],
    }

    const [view, setView] = useState<'yoy' | 'pop' | 'mom'>('yoy')

    const handleChange = (e: any) => {
        setView(e.target.value)
    }

    const currentData = view === 'yoy' ? data.yoy : view === 'pop' ? data.pop : data.mom
    const xKey = view === 'yoy' ? 'year' : view === 'pop' ? 'period' : 'month'
    return (
        <>
            <Paper
                elevation={3}
                className="rounded-xl"
                sx={{ backgroundColor: 'var(--backgroundPaper)' }}
            >
                <Box className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2 p-4">
                    <Typography variant="h6" sx={{ color: 'var(--textPrimary)', paddingX: 1, fontSize: 11, fontWeight: 700 }}>
                        Client Growth Trend
                    </Typography>

                    <FormControl size="small" sx={{ minWidth: 160 }}>
                        <InputLabel sx={{ color: 'var(--textSecondary)', fontSize: 11 }}>View</InputLabel>
                        <Select
                            value={view}
                            onChange={handleChange}
                            label="View"
                            sx={{
                                color: 'var(--textPrimary)',
                                fontSize: 11,
                                '& .MuiOutlinedInput-notchedOutline': {
                                    borderColor: 'var(--primary)',
                                },
                            }}
                        >
                            <MenuItem value="yoy" sx={{fontSize: 11}}>Year on Year</MenuItem>
                            <MenuItem value="pop" sx={{fontSize: 11}}>Period on Period</MenuItem>
                            <MenuItem value="mom" sx={{fontSize: 11}}>Month on Month</MenuItem>
                        </Select>
                    </FormControl>
                </Box>

                <ResponsiveContainer width="100%" height={300}>
                    {data.yoy.length <= 1 ? (
                        <BarChart data={currentData} margin={{ top: 20, right: 30, left: 40, bottom: 50 }}>
                            <CartesianGrid strokeDasharray="3 3" stroke="var(--backgroundDefault)" />
                            <XAxis
                                dataKey={xKey}
                                stroke="var(--textSecondary)"
                                label={{ value: 'Period', dy: 20 }}
                                tick={{ fontSize: 12, fill: 'var(--textSecondary)' }}
                            />
                            <YAxis
                                stroke="var(--textSecondary)"
                                label={{ value: 'No. of Clients', angle: -90, dx: -10 }}
                                tick={{ fontSize: 12, fill: 'var(--textSecondary)' }}
                            />
                            <Tooltip contentStyle={{ backgroundColor: 'var(--backgroundDefault)', border: 'none' }} />
                            <Legend wrapperStyle={{ padding: 10, fontSize: 12, color: 'var(--textSecondary)' }} />
                            <Bar dataKey="clients" fill="var(--primary)" />
                        </BarChart>
                    ) : (
                        <LineChart data={currentData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" stroke="var(--backgroundDefault)" />
                            <XAxis
                                dataKey={xKey}
                                stroke="var(--textSecondary)"
                                label={{ value: 'Period', dy: 10 }}
                                tick={{ fontSize: 12, fill: 'var(--textSecondary)' }}
                            />
                            <YAxis
                                stroke="var(--textSecondary)"
                                label={{ value: 'No. of Clients', angle: -90, dy: 10 }}
                                tick={{ fontSize: 12, fill: 'var(--textSecondary)' }}
                            />
                            <Tooltip contentStyle={{ backgroundColor: 'var(--backgroundDefault)', border: 'none' }} />
                            <Legend wrapperStyle={{ padding: 10, fontSize: 12, color: 'var(--textSecondary)' }} />
                            <Line
                                type="monotone"
                                dataKey="clients"
                                stroke="var(--primary)"
                                strokeWidth={3}
                                activeDot={{ r: 8 }}
                                dot={{ stroke: 'var(--primary)', strokeWidth: 2 }}
                            />
                        </LineChart>
                    )}
                </ResponsiveContainer>
            </Paper>
        </>
    );
}

export default NoOfClients
'use client';

import React, { useState } from 'react';
import {
    Paper,
    Typography,
    MenuItem,
    Select,
    SelectChangeEvent,
    FormControl,
    InputLabel,
} from '@mui/material';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
    Legend,
} from 'recharts';

interface UserEfficiencyData {
    name: string;
    tasksCompleted: number;
    totalTasks: number;
}

const mockData: Record<string, UserEfficiencyData[]> = {
    daily: [
        { name: 'John', tasksCompleted: 2, totalTasks: 3 },
        { name: 'Priya', tasksCompleted: 3, totalTasks: 3 },
        { name: 'Amit', tasksCompleted: 1, totalTasks: 2 },
        { name: 'Sara', tasksCompleted: 2, totalTasks: 2 },
        { name: 'Ravi', tasksCompleted: 1, totalTasks: 1 },
    ],
    weekly: [
        { name: 'John', tasksCompleted: 12, totalTasks: 15 },
        { name: 'Priya', tasksCompleted: 14, totalTasks: 14 },
        { name: 'Amit', tasksCompleted: 10, totalTasks: 12 },
        { name: 'Sara', tasksCompleted: 13, totalTasks: 16 },
        { name: 'Ravi', tasksCompleted: 9, totalTasks: 10 },
    ],
    quarterly: [
        { name: 'John', tasksCompleted: 35, totalTasks: 45 },
        { name: 'Priya', tasksCompleted: 42, totalTasks: 44 },
        { name: 'Amit', tasksCompleted: 38, totalTasks: 40 },
        { name: 'Sara', tasksCompleted: 39, totalTasks: 50 },
        { name: 'Ravi', tasksCompleted: 28, totalTasks: 30 },
    ],
    semiannually: [
        { name: 'John', tasksCompleted: 80, totalTasks: 100 },
        { name: 'Priya', tasksCompleted: 95, totalTasks: 98 },
        { name: 'Amit', tasksCompleted: 70, totalTasks: 85 },
        { name: 'Sara', tasksCompleted: 88, totalTasks: 100 },
        { name: 'Ravi', tasksCompleted: 55, totalTasks: 60 },
    ],
    annually: [
        { name: 'John', tasksCompleted: 160, totalTasks: 200 },
        { name: 'Priya', tasksCompleted: 190, totalTasks: 195 },
        { name: 'Amit', tasksCompleted: 170, totalTasks: 180 },
        { name: 'Sara', tasksCompleted: 182, totalTasks: 200 },
        { name: 'Ravi', tasksCompleted: 140, totalTasks: 150 },
    ],
};

const UserEfficiencyChart: React.FC = () => {
    const [range, setRange] = useState<string>('weekly');

    const handleRangeChange = (event: SelectChangeEvent) => {
        setRange(event.target.value);
    };

    const data = mockData[range];

    return (
        <Paper
            elevation={3}
            className="rounded-xl h-[26rem] p-4"
            sx={{ backgroundColor: 'var(--backgroundPaper)' }}
        >
            <div className="flex justify-between items-center mb-4">
                <Typography
                    variant="subtitle1"
                    sx={{ color: 'var(--textPrimary)', fontSize: 11, fontWeight: 700 }}
                >
                    User Performance Metrics
                </Typography>

                <FormControl size="small">
                    <InputLabel id="range-select-label" sx={{fontSize: 11}}>Time Range</InputLabel>
                    <Select
                        labelId="range-select-label"
                        value={range}
                        label="Time Range"
                        onChange={handleRangeChange}
                        sx={{ minWidth: 150, fontSize: 11 }}
                    >
                        <MenuItem value="daily" sx={{fontSize: 11}}>Daily</MenuItem>
                        <MenuItem value="weekly" sx={{fontSize: 11}}>Weekly</MenuItem>
                        <MenuItem value="quarterly" sx={{fontSize: 11}}>Quarterly</MenuItem>
                        <MenuItem value="semiannually" sx={{fontSize: 11}}>Semi Annually</MenuItem>
                        <MenuItem value="annually" sx={{fontSize: 11}}>Annually</MenuItem>
                    </Select>
                </FormControl>
            </div>

            <div className="h-[85%]">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={data}
                        margin={{ top: 20, right: 30, left: 40, bottom: 40 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis
                            dataKey="name"
                            label={{
                                value: 'Users',
                                position: 'bottom',
                                offset: 10,
                                style: { textAnchor: 'middle' },
                            }}
                        />
                        <YAxis
                            label={{
                                value: 'Number of Tasks',
                                angle: -90,
                                position: 'left',
                                offset: 20,
                                style: { textAnchor: 'middle' },
                            }}
                        />
                        <Tooltip formatter={(value: number) => `${value} tasks`} />
                        <Legend verticalAlign="top" height={36} />
                        <Bar dataKey="totalTasks" fill="#CBD5E1" name="Total Tasks" />
                        <Bar dataKey="tasksCompleted" fill="#4ADE80" name="Tasks Completed" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </Paper>
    );
};

export default UserEfficiencyChart;
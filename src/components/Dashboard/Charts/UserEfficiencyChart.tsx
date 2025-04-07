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
    TextField,
} from '@mui/material';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
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
    const data = mockData[range];

    const handleRangeChange = (event: SelectChangeEvent) => {
        setRange(event.target.value);
    };

    return (
        <Paper
            elevation={3}
            className="rounded-2xl h-[26rem] p-4"
            sx={{ backgroundColor: 'var(--backgroundPaper)' }}
        >
            <div className="flex justify-between items-center mb-4">
                <Typography
                    variant="subtitle1"
                    sx={{
                        color: 'var(--textPrimary)',
                        fontSize: 11,
                        fontWeight: 700,
                    }}
                >
                    User Performance Metrics
                </Typography>

                <div className='flex gap-2'>
                    <FormControl size="small">
                        <TextField
                            label="From Date"
                            type="date"
                            variant="outlined"
                            InputLabelProps={{ shrink: true }}
                            sx={{
                                '& label': { color: 'var(--textSecondary)', fontSize: 11 },
                                '& .MuiOutlinedInput-root': {
                                    fontSize: 11,
                                    minWidth: 160,
                                    maxHeight: 33,
                                    '& fieldset': { borderColor: 'var(--primary)' },
                                    '&:hover fieldset': { borderColor: 'var(--textSecondaryHover)' },
                                    '&.Mui-focused fieldset': { borderColor: 'var(--secondary)' },
                                },
                            }}
                        />
                    </FormControl>

                    <FormControl size="small">
                        <TextField
                            label="To Date"
                            type="date"
                            variant="outlined"
                            InputLabelProps={{ shrink: true }}
                            sx={{
                                '& label': { color: 'var(--textSecondary)', fontSize: 11 },
                                '& .MuiOutlinedInput-root': {
                                    fontSize: 11,
                                    minWidth: 160,
                                    maxHeight: 33,
                                    '& fieldset': { borderColor: 'var(--primary)' },
                                    '&:hover fieldset': { borderColor: 'var(--textSecondaryHover)' },
                                    '&.Mui-focused fieldset': { borderColor: 'var(--secondary)' },
                                },
                            }}
                        />
                    </FormControl>

                    <FormControl size="small">
                        <InputLabel
                            id="range-select-label"
                            sx={{ fontSize: 11, color: 'var(--textSecondary)' }}
                        >
                            Time Range
                        </InputLabel>
                        <Select
                            labelId="range-select-label"
                            value={range}
                            label="Time Range"
                            onChange={handleRangeChange}
                            sx={{
                                minWidth: 150,
                                fontSize: 11,
                                color: 'var(--textPrimary)',
                                '&:hover': { backgroundColor: 'var(--hoverBackground)' },
                            }}
                        >
                            <MenuItem value="daily" sx={{ fontSize: 11 }}>
                                Daily
                            </MenuItem>
                            <MenuItem value="weekly" sx={{ fontSize: 11 }}>
                                Weekly
                            </MenuItem>
                            <MenuItem value="quarterly" sx={{ fontSize: 11 }}>
                                Quarterly
                            </MenuItem>
                            <MenuItem value="semiannually" sx={{ fontSize: 11 }}>
                                Semi Annually
                            </MenuItem>
                            <MenuItem value="annually" sx={{ fontSize: 11 }}>
                                Annually
                            </MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </div>

            <div className="h-[85%]">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={data}
                        margin={{ top: 0, right: 0, left: -10, bottom: 10 }}
                    >
                        <XAxis
                            dataKey="name"
                            label={{
                                value: 'Users',
                                position: 'bottom',
                                offset: 1,
                                style: { textAnchor: 'middle', fill: 'var(--textPrimary)', fontSize: 11 },
                            }}
                            tick={{ fill: 'var(--textSecondary)', fontSize: 11 }}
                        />
                        <YAxis
                            label={{
                                value: 'Number of Tasks',
                                angle: -90,
                                position: 'left',
                                offset: -20,
                                style: { textAnchor: 'middle', fill: 'var(--textPrimary)', fontSize: 11 },
                            }}
                            tick={{ fill: 'var(--textSecondary)', fontSize: 11 }}
                        />
                        <Tooltip
                            formatter={(value: number) => `${value} tasks`}
                            contentStyle={{ fontSize: 11, backgroundColor: 'var(--background)', borderRadius: 4 }}
                        />
                        <Legend
                            verticalAlign="top"
                            height={36}
                            wrapperStyle={{ fontSize: 11, color: 'var(--textSecondary)' }}
                        />
                        <Bar
                            dataKey="totalTasks"
                            fill="var(--textSecondary)"
                            name="Total Tasks"
                            radius={[4, 4, 0, 0]}
                        />
                        <Bar
                            dataKey="tasksCompleted"
                            fill="var(--textPrimary)"
                            name="Tasks Completed"
                            radius={[4, 4, 0, 0]}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </Paper>
    );
};

export default UserEfficiencyChart;
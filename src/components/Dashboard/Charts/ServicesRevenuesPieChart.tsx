'use client';

import { Paper, Typography } from '@mui/material';
import React from 'react';
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

interface DataEntry {
    name: string;
    value: number;
}

const data: DataEntry[] = [
    { name: 'GST Filing', value: 150000 },
    { name: 'Income Tax Return', value: 135000 },
    { name: 'Accounting', value: 120000 },
    { name: 'PAN Assistance', value: 110000 },
    { name: 'GST Registration', value: 99000 },
];

const COLORS: string[] = ['#34D399', '#60A5FA', '#FBBF24', '#F472B6', '#A78BFA'];

const ServicesRevenuesPieChart: React.FC = () => {
    const totalValue = data.reduce((sum, entry) => sum + entry.value, 0);

    return (
        <Paper
            elevation={3}
            className="rounded-xl"
            sx={{ backgroundColor: 'var(--backgroundPaper)' }}
        >
            <Typography
                variant="subtitle1"
                className="text-left pt-4"
                sx={{ color: 'var(--textPrimary)', padding: 1, fontSize: 11, fontWeight: 700 }}
            >
                Distribution of Revenue by Service Category
            </Typography>

            <div className="h-[80%] px-4">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={data}
                            dataKey="value"
                            nameKey="name"
                            outerRadius={80}
                            paddingAngle={0}
                            label={({ value }) =>
                                `${((value / totalValue) * 100).toFixed(0)}%`
                            }
                        >
                            {data.map((entry, index) => (
                                <Cell
                                    key={`cell-${index}`}
                                    fill={COLORS[index % COLORS.length]}
                                />
                            ))}
                        </Pie>
                        <Tooltip
                            formatter={(value: number) =>
                                `${((value / totalValue) * 100).toFixed(0)}%`
                            }
                        />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </Paper>
    );
};

export default ServicesRevenuesPieChart;

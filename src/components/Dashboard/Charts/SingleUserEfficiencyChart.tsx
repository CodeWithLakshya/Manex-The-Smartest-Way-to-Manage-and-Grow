'use client';

import React from 'react';
import { Paper, Typography } from '@mui/material';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';

interface EfficiencyEntry {
  date: string;
  completed: number;
  assigned: number;
}

const userTaskData: EfficiencyEntry[] = [
  { date: 'Mon', completed: 5, assigned: 6 },
  { date: 'Tue', completed: 6, assigned: 6 },
  { date: 'Wed', completed: 4, assigned: 5 },
  { date: 'Thu', completed: 5, assigned: 6 },
  { date: 'Fri', completed: 6, assigned: 6 },
  { date: 'Sat', completed: 3, assigned: 4 },
  { date: 'Sun', completed: 0, assigned: 0 },
];

const SingleUserEfficiencyChart: React.FC = () => {
  return (
    <Paper
      elevation={3}
      className="rounded-xl h-80 p-4"
      sx={{ backgroundColor: 'var(--backgroundPaper)' }}
    >
      <Typography
        variant="subtitle1"
        className="text-center mb-4"
        sx={{ color: 'var(--textPrimary)' }}
      >
        Weekly Task Efficiency - John Doe
      </Typography>

      <div className="h-[85%]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={userTaskData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip formatter={(value: number) => `${value} tasks`} />
            <Legend />
            <Bar dataKey="assigned" fill="#94A3B8" name="Assigned Tasks" />
            <Bar dataKey="completed" fill="#34D399" name="Completed Tasks" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Paper>
  );
};

export default SingleUserEfficiencyChart;

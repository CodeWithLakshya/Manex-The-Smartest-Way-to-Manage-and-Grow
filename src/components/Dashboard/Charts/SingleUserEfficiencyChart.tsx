'use client';

import React, { useState } from 'react';
import {
  Paper,
  Typography,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
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

interface EfficiencyEntry {
  date: string;
  completed: number;
  assigned: number;
}

const userTaskData: Record<string, EfficiencyEntry[]> = {
  'Days of Week': [
    { date: 'Mon', completed: 5, assigned: 6 },
    { date: 'Tue', completed: 6, assigned: 6 },
    { date: 'Wed', completed: 4, assigned: 5 },
    { date: 'Thu', completed: 5, assigned: 6 },
    { date: 'Fri', completed: 6, assigned: 6 },
    { date: 'Sat', completed: 3, assigned: 4 },
    { date: 'Sun', completed: 0, assigned: 0 },
  ],
  Weekly: [
    { date: 'W1', completed: 30, assigned: 35 },
    { date: 'W2', completed: 28, assigned: 30 },
    { date: 'W3', completed: 32, assigned: 36 },
    { date: 'W4', completed: 35, assigned: 40 },
  ],
  Quarterly: [
    { date: 'Q1', completed: 85, assigned: 100 },
    { date: 'Q2', completed: 90, assigned: 110 },
    { date: 'Q3', completed: 88, assigned: 105 },
    { date: 'Q4', completed: 95, assigned: 115 },
  ],
  'Semi Annually': [
    { date: 'H1', completed: 170, assigned: 200 },
    { date: 'H2', completed: 185, assigned: 210 },
  ],
  Annually: [
    { date: '2023', completed: 355, assigned: 400 },
    { date: '2024', completed: 375, assigned: 420 },
  ],
  Custom: [
    { date: 'Custom A', completed: 45, assigned: 50 },
    { date: 'Custom B', completed: 60, assigned: 70 },
  ],
};

const SingleUserEfficiencyChart: React.FC = () => {
  const [range, setRange] = useState<string>('Days of Week');

  const handleRangeChange = (event: SelectChangeEvent) => {
    setRange(event.target.value);
  };

  const data = userTaskData[range];

  return (
    <Paper
      elevation={3}
      className="rounded-2xl p-4 h-[26rem]"
      sx={{ backgroundColor: 'var(--backgroundPaper)' }}
    >
      <div className="flex justify-between items-center mb-4">
        <Typography
          variant="subtitle1"
          sx={{ color: 'var(--textPrimary)', fontSize: 11, fontWeight: 700 }}
        >
          Performance Metrics - John Doe
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
            <InputLabel id="time-range-label" sx={{ fontSize: 11 }}>
              Time Range
            </InputLabel>
            <Select
              labelId="time-range-label"
              value={range}
              label="Time Range"
              onChange={handleRangeChange}
              sx={{
                minWidth: 160,
                fontSize: 11,
                color: 'var(--textPrimary)',
                '&:hover': { backgroundColor: 'var(--hoverBackground)' },
              }}
            >
              <MenuItem value="Days of Week" sx={{ fontSize: 11 }}>
                Days of Week
              </MenuItem>
              <MenuItem value="Weekly" sx={{ fontSize: 11 }}>
                Weekly
              </MenuItem>
              <MenuItem value="Quarterly" sx={{ fontSize: 11 }}>
                Quarterly
              </MenuItem>
              <MenuItem value="Semi Annually" sx={{ fontSize: 11 }}>
                Semi Annually
              </MenuItem>
              <MenuItem value="Annually" sx={{ fontSize: 11 }}>
                Annually
              </MenuItem>
              <MenuItem value="Custom" sx={{ fontSize: 11 }}>
                Custom
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
              dataKey="date"
              label={{
                value: 'Period',
                position: 'bottom',
                offset: 1,
                style: {
                  textAnchor: 'middle',
                  fill: 'var(--textPrimary)',
                  fontSize: 11,
                },
              }}
              tick={{ fill: 'var(--textSecondary)', fontSize: 11 }}
            />
            <YAxis
              label={{
                value: 'Number of Tasks',
                angle: -90,
                position: 'left',
                offset: -20,
                style: {
                  textAnchor: 'middle',
                  fill: 'var(--textPrimary)',
                  fontSize: 11,
                },
              }}
              tick={{ fill: 'var(--textSecondary)', fontSize: 11 }}
            />
            <Tooltip
              formatter={(value: number) => `${value} tasks`}
              contentStyle={{
                fontSize: 11,
                backgroundColor: 'var(--background)',
                borderRadius: 4,
              }}
            />
            <Legend
              verticalAlign="top"
              height={36}
              wrapperStyle={{
                fontSize: 11,
                color: 'var(--textSecondary)',
              }}
            />
            <Bar
              dataKey="assigned"
              fill="var(--textSecondary)"
              name="Assigned Tasks"
              radius={[4, 4, 0, 0]}
            />
            <Bar
              dataKey="completed"
              fill="var(--textPrimary)"
              name="Completed Tasks"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Paper>
  );
};

export default SingleUserEfficiencyChart;

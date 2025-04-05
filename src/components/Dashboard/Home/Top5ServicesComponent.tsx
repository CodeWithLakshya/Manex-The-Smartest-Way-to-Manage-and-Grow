"use client"
import React from 'react';
import { Paper, Box, Table, TableHead, TableRow, TableCell, TableBody, Typography } from '@mui/material';

interface Service {
    code: string;
    name: string;
    revenue: number;
    status: 'Active' | 'Paused';
}

const Top5ServicesComponent: React.FC = () => {
    const services: Service[] = [
        { code: 'S000001', name: 'GST Filing', revenue: 150000, status: 'Active' },
        { code: 'S000002', name: 'Income Tax Return', revenue: 135000, status: 'Active' },
        { code: 'S000003', name: 'Accounting & Bookkeeping', revenue: 120000, status: 'Paused' },
        { code: 'S000004', name: 'PAN Assistance', revenue: 110000, status: 'Active' },
        { code: 'S000005', name: 'GST Registration', revenue: 99000, status: 'Paused' },
    ];

    return (
        <Paper
            elevation={3}
            className="rounded-xl overflow-hidden"
            sx={{ backgroundColor: 'var(--backgroundPaper)' }}
        >
            <Box sx={{ overflowX: 'auto' }}>
                <Typography variant='h6' sx={{padding: 1, fontSize: 11, fontWeight: 700}}>Top 5 Services as per Revenue</Typography>
                <Table>
                    <TableHead sx={{ backgroundColor: 'var(--backgroundDefault)' }}>
                        <TableRow>
                            <TableCell sx={{ color: 'var(--textPrimary)', fontSize: 11, fontWeight: 700 }}>Service Code</TableCell>
                            <TableCell sx={{ color: 'var(--textPrimary)', fontSize: 11, fontWeight: 700 }}>Service Name</TableCell>
                            <TableCell sx={{ color: 'var(--textPrimary)', fontSize: 11, fontWeight: 700 }} align='right'>Revenue (Rs.)</TableCell>
                            <TableCell sx={{ color: 'var(--textPrimary)', fontSize: 11, fontWeight: 700 }}>Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {services.map((service, index) => (
                            <TableRow key={index}>
                                <TableCell sx={{ fontSize: 11 }}>{service.code}</TableCell>
                                <TableCell sx={{ fontSize: 11 }}>{service.name}</TableCell>
                                <TableCell sx={{ fontSize: 11 }} align='right'>{service.revenue.toLocaleString()}</TableCell>
                                <TableCell sx={{ fontSize: 11 }}>
                                    <span
                                        className={`font-medium ${service.status === 'Active'
                                            ? 'text-green-600'
                                            : 'text-yellow-600'
                                            }`}
                                    >
                                        {service.status}
                                    </span>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Box>
        </Paper>
    );
};

export default Top5ServicesComponent;
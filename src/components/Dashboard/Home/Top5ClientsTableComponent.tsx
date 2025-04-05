'use client'
import React from 'react'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Box, Typography } from '@mui/material'

type Top5Client = {
    code: string
    name: string
    revenue: number
    status: 'Active' | 'On Hold' | 'Inactive'
}

const Top5Clients: Top5Client[] = [
    { code: 'C000001', name: 'Acme Corp', revenue: 150000, status: 'Active' },
    { code: 'C000002', name: 'Globex Inc.', revenue: 135000, status: 'On Hold' },
    { code: 'C000003', name: 'Soylent Ltd.', revenue: 120000, status: 'Active' },
    { code: 'C000004', name: 'Initech', revenue: 110000, status: 'Inactive' },
    { code: 'C000005', name: 'Umbrella Corp', revenue: 99000, status: 'Active' },
]

const getStatusColor = (status: Top5Client['status']) => {
    switch (status) {
        case 'Active':
            return 'text-green-600'
        case 'On Hold':
            return 'text-yellow-600'
        case 'Inactive':
            return 'text-red-600'
        default:
            return 'text-gray-600'
    }
}

const Top5ClientsTable: React.FC = () => {
    return (
        <Paper
            elevation={3}
            className="rounded-xl overflow-hidden"
            sx={{ backgroundColor: 'var(--backgroundPaper)' }}
        >
            <Box sx={{ overflowX: 'auto' }}>
                <Typography variant='h6' sx={{padding: 1, fontSize: 11, fontWeight: 700}}>Top 5 Clients as per Revenue</Typography>
                <Table>
                    <TableHead sx={{ backgroundColor: 'var(--backgroundDefault)' }}>
                        <TableRow>
                            <TableCell sx={{ color: 'var(--textPrimary)', fontSize: 11, fontWeight: 700 }}>Client Code</TableCell>
                            <TableCell sx={{ color: 'var(--textPrimary)', fontSize: 11, fontWeight: 700 }}>Client Name</TableCell>
                            <TableCell sx={{ color: 'var(--textPrimary)', fontSize: 11, fontWeight: 700 }} align="right">Revenue (Rs.)</TableCell>
                            <TableCell sx={{ color: 'var(--textPrimary)', fontSize: 11, fontWeight: 700 }}>Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Top5Clients.map((client, idx) => (
                            <TableRow key={idx}>
                                <TableCell sx={{fontSize: 11}}>{client.code}</TableCell>
                                <TableCell sx={{fontSize: 11}}>{client.name}</TableCell>
                                <TableCell sx={{fontSize: 11}} align="right">{client.revenue.toLocaleString()}</TableCell>
                                <TableCell sx={{fontSize: 11}}>
                                    <span className={`${getStatusColor(client.status)} font-medium`}>
                                        {client.status}
                                    </span>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Box>
        </Paper>
    )
}

export default Top5ClientsTable

"use client"
import { Card, CardContent } from '@mui/material'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import React from 'react'

interface StaffMember {
    id: string
    empId: string
    name: string
    email: string
    role: string
    status: 'Active' | 'Inactive'
}

const columns: GridColDef[] = [
    { field: 'empId', headerName: 'Employee ID', flex: 1 },
    { field: 'name', headerName: 'Name', flex: 1 },
    { field: 'email', headerName: 'Email ID', flex: 1 },
    { field: 'role', headerName: 'Role', flex: 1 },
    { field: 'status', headerName: 'Status', flex: 1 },
]

const rows: StaffMember[] = [
    { id: '1', empId: 'E000001', name: 'Amit Sharma', email: 'amit@example.com', role: 'Accountant', status: 'Active' },
    { id: '2', empId: 'E000002', name: 'Pooja Patel', email: 'pooja@example.com', role: 'Manager', status: 'Inactive' },
    { id: '3', empId: 'E000003', name: 'Ravi Kumar', email: 'ravi@example.com', role: 'Assistant', status: 'Active' },
    { id: '4', empId: 'E000004', name: 'Ajay Sharma', email: 'ajay@example.com', role: 'Accountant', status: 'Active' },
    { id: '5', empId: 'E000005', name: 'Arneja Singh', email: 'arneja@example.com', role: 'Manager', status: 'Inactive' },
    { id: '6', empId: 'E000006', name: 'Udit Kumar', email: 'udit@example.com', role: 'Assistant', status: 'Active' },
    { id: '7', empId: 'E000007', name: 'Narayan Kumar', email: 'narayan@example.com', role: 'Assistant', status: 'Active' },
]

const StaffTableComponent: React.FC = () => {
    return (
        <>
            <Card className="w-full shadow-md rounded-2xl">
                <CardContent>
                    <div style={{ height: 400, width: '100%' }}>
                        <DataGrid
                            rows={rows}
                            columns={columns}
                            pageSizeOptions={[5, 10]}
                            initialState={{
                                pagination: {
                                    paginationModel: { pageSize: 5, page: 0 },
                                },
                            }}
                            disableRowSelectionOnClick
                            autoHeight
                        />
                    </div>
                </CardContent>
            </Card>
        </>
    )
}

export default StaffTableComponent
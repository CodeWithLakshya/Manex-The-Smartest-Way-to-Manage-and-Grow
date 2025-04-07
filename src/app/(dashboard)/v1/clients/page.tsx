"use client"
import { useState } from "react"
import { DataGrid, GridColDef, GridRowParams } from "@mui/x-data-grid"
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material"
import ClientHandlerTimeline from "@/components/Dashboard/Client/ClientHandlerTimeline"

interface ClientRow {
  id: number
  clientId: string
  name: string
  email: string
  phone: string
  status: string
}

const columns: GridColDef[] = [
  { field: "clientId", headerName: "Client ID", flex: 1 },
  { field: "name", headerName: "Client Name", flex: 1 },
  { field: "email", headerName: "Email ID", flex: 1 },
  { field: "phone", headerName: "Mobile No.", flex: 1 },
  { field: "status", headerName: "Status", flex: 1 }
]

const rows: ClientRow[] = [
  {
    id: 1,
    clientId: "C000001",
    name: "Acme Corp",
    email: "info@acme.com",
    phone: "+91 12345-67890",
    status: "Active"
  },
  {
    id: 2,
    clientId: "C000002",
    name: "Beta Inc",
    email: "contact@beta.com",
    phone: "+91 98765-43210",
    status: "Inactive"
  },
]

export default function ClientsTable() {
  const [open, setOpen] = useState<boolean>(false)
  const [selectedClient, setSelectedClient] = useState<ClientRow | null>(null)

  const handleRowClick = (params: GridRowParams<ClientRow>) => {
    setSelectedClient(params.row)
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
    setSelectedClient(null)
  }

  return (
    <div className="h-[500px] w-full p-0">
      <DataGrid
        rows={rows}
        columns={columns}
        pageSizeOptions={[5, 10]}
        onRowClick={handleRowClick}
        initialState={{
          pagination: {
            paginationModel: { pageSize: 5, page: 0 },
          },
        }}
        autoHeight
      />

      <Dialog open={open} onClose={handleClose} fullWidth={true} maxWidth="xl" PaperProps={{ style: { height: '100vh', width: '100vw' } }}>
        <DialogTitle>Client Details</DialogTitle>
        <DialogContent className="space-y-2">
          {selectedClient && (
            <>
              <p><strong>Client ID:</strong> {selectedClient.clientId}</p>
              <p><strong>Name:</strong> {selectedClient.name}</p>
              <p><strong>Email:</strong> {selectedClient.email}</p>
              <p><strong>Phone:</strong> {selectedClient.phone}</p>
              <p><strong>Status:</strong> {selectedClient.status}</p>
              <ClientHandlerTimeline />
            </>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
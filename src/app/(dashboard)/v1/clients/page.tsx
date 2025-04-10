"use client"
import { useState } from "react"
import { DataGrid, GridColDef, GridRowParams } from "@mui/x-data-grid"
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, IconButton } from "@mui/material"
import { Delete, Edit } from "@mui/icons-material"
import ClientForm from "@/components/Dashboard/Client/ClientForm"

interface Address {
  particulars: string
  addressLine1: string
  addressLine2: string
  city: string
  state: string
  pincode: string
}

interface Contacts {
  id: string
  contactPersonName: string
  designation: string
  primaryEmail: string
  secondaryEmail: string
  primaryMobile: string
  secondaryMobile: string
}

interface ClientRow {
  id: number
  clientId: string
  name: string
  typeOfAssessee: string
  dateOfIncorporation_Birth: string
  status: string
  pan: string
  adhaar: string
  cin_llpin: string
  tan: string
  gstin: string
  contacts: Contacts[]
  address: Address[]
}

const columns: GridColDef[] = [
  { field: "clientId", headerName: "Client ID", flex: 1 },
  { field: "name", headerName: "Client Name", flex: 1 },
  { field: "pan", headerName: "PAN No.", flex: 1 },
  { field: "email", headerName: "Email ID", flex: 1 },
  { field: "phone", headerName: "Mobile No.", flex: 1 },
  { field: "status", headerName: "Status", flex: 1 }
]

const rows: ClientRow[] = [
  {
    id: 1,
    clientId: "C000001",
    name: "Acme Corp",
    typeOfAssessee: "Individual",
    dateOfIncorporation_Birth: "06-06-2024",
    status: "Active",
    pan: "DIFPG1864N",
    adhaar: "881577271922",
    cin_llpin: "ABC123456EFG123",
    tan: "DIFPG1864N",
    gstin: "03DIFPG1864N",
    contacts: [
      {
        id: "1",
        contactPersonName: "ABC",
        designation: "Accountant",
        primaryEmail: "abc@example.com",
        secondaryEmail: "def@example.com",
        primaryMobile: "+91 12345-67890",
        secondaryMobile: "+91 12345-67891",
      },
      {
        id: "2",
        contactPersonName: "DEF",
        designation: "Owner",
        primaryEmail: "abc1@example.com",
        secondaryEmail: "def1@example.com",
        primaryMobile: "+91 12345-67892",
        secondaryMobile: "+91 12345-67893",
      }
    ],
    address: [
      {
        particulars: "Residence",
        addressLine1: "ABC1",
        addressLine2: "ABC2",
        city: "Jalandhar",
        state: "Punjab",
        pincode: "144001",
      },
      {
        particulars: "Business",
        addressLine1: "ABC1",
        addressLine2: "ABC2",
        city: "Jalandhar",
        state: "Punjab",
        pincode: "144001",
      }
    ]
  }
]

export default function ClientsTable() {
  const [open, setOpen] = useState<boolean>(false)
  const [selectedClient, setSelectedClient] = useState<ClientRow | null>(null)

  const handleRowClick = (params: GridRowParams<ClientRow>) => {
    setSelectedClient(params.row)
    setOpen(true)
  }

  const handleClose = (): void => {
    setOpen(false);
    setSelectedClient(null);
  }

  const handleEdit = (): void => { }
  const handleDelete = (): void => { }

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
        <DialogTitle className="flex justify-between items-center">
          Client Details
          <div className="flex gap-2">
            <IconButton onClick={handleEdit} aria-label="edit" sx={{ color: "var(--primary)" }}>
              <Edit />
            </IconButton>
            <IconButton onClick={handleDelete} aria-label="delete" sx={{ color: "red" }}>
              <Delete />
            </IconButton>
          </div>
        </DialogTitle>
        <DialogContent className="space-y-2 mt-1">
          {selectedClient && (
            <ClientForm selectedClient={selectedClient} />
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
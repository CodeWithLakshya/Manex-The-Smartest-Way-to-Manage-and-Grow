import { TextField, Typography } from '@mui/material'
import React from 'react'
import ClientHandlerTimeline from './ClientHandlerTimeline'

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

interface Client {
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

interface ClientFormProps {
  selectedClient: Client
}

const ClientForm: React.FC<ClientFormProps> = ({ selectedClient }) => {
  return (
    <>
      <div className="flex flex-col gap-2 my-2">
        <div className="flex gap-2 mb-2">
          <TextField label="Client ID" value={selectedClient.clientId} disabled={true} fullWidth />
          <TextField label="Name" value={selectedClient.name} disabled={false} fullWidth />
          <TextField label="Type of Assessee" value={selectedClient.typeOfAssessee} disabled={false} fullWidth />
          <TextField label="Date of Incorporation/ Birth" value={selectedClient.dateOfIncorporation_Birth} disabled={false} fullWidth />
          <TextField label="Status" value={selectedClient.status} disabled={false} fullWidth />
        </div>
        <div className="flex gap-2 mb-2">
          <TextField label="PAN No." value={selectedClient.pan} disabled={false} fullWidth />
          <TextField label="Adhaar No." value={selectedClient.adhaar} disabled={false} fullWidth />
          <TextField label="CIN/ LLPIN" value={selectedClient.cin_llpin} disabled={false} fullWidth />
          <TextField label="TAN No." value={selectedClient.tan} disabled={false} fullWidth />
          <TextField label="GSTIN" value={selectedClient.gstin} disabled={false} fullWidth />
        </div>
        <div className='flex gap-2 mb-2'>
          <Typography variant="body2" sx={{ fontWeight: 700 }}>Contact Details</Typography>
        </div>
        {selectedClient.contacts.map((contact: Contacts) => {
          return (
            <div className="flex gap-2 mb-2" key={contact.id}>
              <TextField label="Contact Person Name" value={contact.contactPersonName} disabled={false} fullWidth />
              <TextField label="Designation" value={contact.designation} disabled={false} fullWidth />
              <TextField label="Primary Email ID" value={contact.primaryEmail} disabled={false} fullWidth />
              <TextField label="Secondary Email ID" value={contact.secondaryEmail} disabled={false} fullWidth />
              <TextField label="Primary Mobile No." value={contact.primaryMobile} disabled={false} fullWidth />
              <TextField label="Secondary Mobile No." value={contact.secondaryMobile} disabled={false} fullWidth />
            </div>
          );
        })}

        {selectedClient.address.map((address: Address) => {
          return (
            <div className="flex flex-col gap-2 mb-2" key={address.particulars}>
              <div className='flex gap-2 mb-2'>
                <Typography variant="body2" sx={{ fontWeight: 700 }}>{address.particulars} Address</Typography>
              </div>
              <div className="flex gap-2 mb-2">
                <TextField label="Address Line 1" value={address.addressLine1} disabled={false} fullWidth />
                <TextField label="Address Line 2" value={address.addressLine2} disabled={false} fullWidth />
              </div>
              <div className="flex gap-2">
                <TextField label="City" value={address.city} disabled={false} fullWidth />
                <TextField label="State" value={address.state} disabled={false} fullWidth />
                <TextField label="Pin Code" value={address.pincode} disabled={false} fullWidth />
              </div>
            </div>
          );
        })}
        
        <div className="flex gap-2">
          <ClientHandlerTimeline />
        </div>
      </div>
    </>
  )
}

export default ClientForm
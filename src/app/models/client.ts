import mongoose, { Schema, Document, Model } from "mongoose"

export interface IClient extends Document {
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
    contacts: Array<{
        id: string
        contactPersonName: string
        designation: string
        primaryEmail: string
        secondaryEmail: string
        primaryMobile: string
        secondaryMobile: string
    }>
    address: Array<{
        particulars: string
        addressLine1: string
        addressLine2: string
        city: string
        state: string
        pincode: string
    }>
}

const ClientSchema: Schema<IClient> = new Schema(
    {
        clientId: { type: String, required: true },
        name: { type: String, required: true },
        typeOfAssessee: { type: String, required: true },
        dateOfIncorporation_Birth: { type: String, required: true },
        status: { type: String, required: true },
        pan: { type: String, required: true },
        adhaar: { type: String, required: true },
        cin_llpin: { type: String, required: true },
        tan: { type: String, required: true },
        gstin: { type: String, required: true },
        contacts: [{
            id: { type: String, required: true },
            contactPersonName: { type: String, required: true },
            designation: { type: String, required: true },
            primaryEmail: { type: String, required: true },
            secondaryEmail: { type: String },
            primaryMobile: { type: String, required: true },
            secondaryMobile: { type: String }
        }],
        address: [{
            particulars: { type: String, required: true },
            addressLine1: { type: String, required: true },
            addressLine2: { type: String },
            city: { type: String, required: true },
            state: { type: String, required: true },
            pincode: { type: String, required: true }
        }]
    },
    { timestamps: true }
)

const Client: Model<IClient> = mongoose.models.Client || mongoose.model<IClient>("Client", ClientSchema, "Clients")

export default Client
import mongoose, { Schema, Document, Model } from "mongoose"

export interface IUser extends Document {
  userId: string
  name: string
  password: string
  cpwd: string
  email: string
  mobile: string
}

const UserSchema: Schema<IUser> = new Schema(
  {
    userId: { type: String, required: true, unique: true },
    name: {type: String, required: true},
    password: { type: String, required: true },
    cpwd: { type: String, required: true },
    email: {type: String, required: true},
    mobile: {type: String, required: true}
  },
  { timestamps: true }
)

// Fix model initialization to avoid Mongoose re-compilation errors
const User: Model<IUser> = mongoose.models.User || mongoose.model<IUser>("User", UserSchema, "Users")

export default User

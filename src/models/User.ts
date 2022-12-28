import mongoose, { Document, Schema } from "mongoose";

export interface IUser extends Document {
  firstName: string;
  lastName: string;
  age: string;
  birthDay: Date;
  position: string;
  identity: string;
  price: string;
}

export enum Position {
  Junior = "Çirak",
  Middle = "Kalfa",
  Master = "Usta",
  Electrician = "Elektrikçi",
  Spare = "Yedek Parça",
  Accounting = "Muhasebe",
}
const UserSchema: Schema = new Schema<IUser>({
  firstName: {
    type: String,
    required: true,
    
  },
  lastName: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
  birthDay: {
    type: Date,
    required: true,
  },
  position: {
    type: String,
    enum: Position,
    default: Position.Junior,
    required: true,
  },
  identity: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
});

const User = mongoose.model<IUser>("User", UserSchema);
export default User;

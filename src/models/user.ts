import mongoose, { Schema } from "mongoose";

type userSchemaType = {
  name: string;
  lastName?: string;
  birthDate: Date;
  email: string;
  isAdmin: boolean;
  isActive: boolean;
};

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
    },
    birthDate: {
      type: Date,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: true,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model<userSchemaType>("User", userSchema);

export default User;

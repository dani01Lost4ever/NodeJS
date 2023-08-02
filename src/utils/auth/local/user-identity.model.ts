import mongoose, { Schema, model } from "mongoose";
import { UserIdentity as iUserIdentity } from "./user-identity.entity";

export const userIdentitySchema = new mongoose.Schema<iUserIdentity>({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  provider: { type: String, default: "local" },
  credentials: {
    type: {
      username: String,
      hashedPassword: String,
    },
  },
});

userIdentitySchema.pre("findOne", function (next) {
  this.populate("user");
  next();
});

export const UserIdentity = model<iUserIdentity>(
  "UserIdentity",
  userIdentitySchema
);

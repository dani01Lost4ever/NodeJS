import mongoose, { Schema } from "mongoose";
import { CartItem as iCartItem } from "./cart-item.entity";

const cartItemSchema = new Schema<iCartItem>({
  product: { type: Schema.Types.ObjectId, ref: "Product" },
  quantity: Number,
  user: Schema.Types.ObjectId,
});

cartItemSchema.set("toJSON", {
  virtuals: true,
  transform: (_, ret) => {
    delete ret._id;
    delete ret.__v;
    delete ret.user;
    return ret;
  },
});

export const CartItem = mongoose.model<iCartItem>("CartItem", cartItemSchema);

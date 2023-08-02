import { assign } from "lodash";
import { CartItem } from "./cart-item.entity";
import { CartItem as CartItemModel } from "./cart-item.model";
import { NotFoundError } from "../../errors/not-found";

export class CartItemService {
  async find(userId: string): Promise<CartItem[]> {
    return CartItemModel.find({ user: userId }).populate("product");
  }

  async getById(id: string, userId: string): Promise<CartItem | null> {
    return this._getById(id, userId);
  }

  private async _getById(id: string, userId: string) {
    return CartItemModel.findOne({ _id: id, user: userId }).populate("product");
  }

  async add(item: CartItem, userId: string): Promise<CartItem> {
    const existing = await CartItemModel.findOne({
      product: item.product,
      user: userId,
    });
    if (existing) {
      return this.update(
        existing.id,
        { quantity: existing.quantity + item.quantity },
        userId
      );
    }

    const newItem = await CartItemModel.create({ ...item, user: userId });
    await newItem.populate("product");

    return newItem;
  }

  async update(
    id: string,
    data: Partial<CartItem>,
    userId: string
  ): Promise<CartItem> {
    const item = await this._getById(id, userId);
    if (!item) {
      throw new NotFoundError();
    }
    assign(item, data);
    await item.save();

    return item;
  }

  async remove(id: string, userId: string): Promise<void> {
    const item = await this._getById(id, userId);
    if (!item) {
      throw new NotFoundError();
    }
    await item.deleteOne();
  }
}

export default new CartItemService();

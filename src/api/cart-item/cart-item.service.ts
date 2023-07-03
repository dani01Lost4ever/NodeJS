import { CART } from "../../cart";
import { assign } from 'lodash';

export class CartItemService {
  
  async find() {
    return CART;
  }

  async getById(id: string) {
    return CART.find(item => item.id === id) || null;
  }

  async add(item: any) {
    CART.push(item);
    return item;
  }

  async update(id: string, data: any) {
    const item = await this.getById(id);
    if (!item) {
      throw new Error('Not Found');
    }
    assign(item, data);
    return item;
  }

  async remove(id: string) {
    const index = CART.findIndex(item => item.id === id);
    if (index === -1) {
      throw new Error('Not Found');
    }
    CART.splice(index, 1);
  }
}

export default new CartItemService();
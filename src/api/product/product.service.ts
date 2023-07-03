import PRODUCTS from "../../../products.json";

export class ProductService {

  async find() {
    return PRODUCTS;
  }

  async getById(id: string) {
    return PRODUCTS.find(i => i.id === id) || null;
  }

}

export default new ProductService();
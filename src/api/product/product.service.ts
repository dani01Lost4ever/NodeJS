import PRODUCTS from "../../products.json";
import Generation, { generateProductsAndWriteToFile } from "../../example-data";
export class ProductService {

  async generate(id: number) {
     Generation(id);
    return PRODUCTS;
  }

  async generateTs(id: number) {
    generateProductsAndWriteToFile(id);
   return PRODUCTS;
 }

  async find() {
    return PRODUCTS;
  }

  async getById(id: string) {
    return PRODUCTS.find(i => i.id === id) || null;
  }

}

export default new ProductService();
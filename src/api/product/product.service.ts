import { Product } from "./product.entity";
import { Product as ProductModel } from './product.model';
import PRODUCTS from "../../../products.json";
import Generation from "../example-data";
export class ProductService {
  async generate(id: number) {
    
   return Generation(id);
 }

  async find(): Promise<Product[]> {
    const list = await ProductModel.find();
    return list;
  }

  async getById(id: string): Promise<Product | null> {
    const item = await ProductModel.findById(id);
    return item;
  }

}

export default new ProductService();
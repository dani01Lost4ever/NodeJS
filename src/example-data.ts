import { writeFileSync, existsSync, unlinkSync} from 'node:fs';
import { faker } from '@faker-js/faker/locale/it';
import fs from 'fs';

export interface Product {
  id: string;
  name: string;
  description: string;
  netPrice: number;
  weight: number;
  discount: number;
}

function generateRandomProduct() {
  return {
    id: faker.database.mongodbObjectId(),
    name: faker.commerce.product(),
    description: faker.commerce.productDescription(),
    netPrice: parseFloat(faker.commerce.price()),
    weight: faker.number.int({min: 50, max: 2000}),
    discount: faker.number.float({min: 0, max: 1, precision: 0.01})
  }
}

export default function generateProducts(num: number) {
  const data = Array.from({ length: num }, generateRandomProduct);
  writeFileSync('/products.json', JSON.stringify(data), { encoding: 'utf-8' });
}

export function generateProductsAndWriteToFile(num: number){
  const products: Product[] = Array.from({ length: num }, generateRandomProduct);
  const fileContent = `export const products= ${JSON.stringify(products)};`;
  writeFileSync('/products.ts', fileContent, { encoding: 'utf-8' });
}
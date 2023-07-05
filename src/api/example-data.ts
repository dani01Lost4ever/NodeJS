import { faker } from '@faker-js/faker/locale/it';
import { Product } from './product/product.model';
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
    weight: faker.number.int({min: 50, max: 20000}),
    discount: faker.number.float({min: 0, max: 1, precision: 0.01})
  }
}

export default async function generateProducts(num: number) {
  const data = Array.from({ length: num }, generateRandomProduct);

  try {
    // Save the cart items to the database
    await Product.insertMany(data);
    console.log(`Successfully saved ${num} cart items to the database.`);
    return data;
  } catch (error) {
    console.error('Error saving cart items to the database:', error);
    return error;
  } 
}

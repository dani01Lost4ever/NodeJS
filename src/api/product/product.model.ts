import  mongoose from 'mongoose';
import { Product as iProduct} from './product.entity';

export const productSchema = new mongoose.Schema<iProduct>({
  name: String,
  description: String,
  netPrice: Number,
  discount: Number,
  weight: Number
});

productSchema.set('toJSON', {
  virtuals: true,
  transform: (_, ret) => {
    delete ret._id;
    return ret;
  }
});

export const Product = mongoose.model<iProduct>('Product', productSchema);
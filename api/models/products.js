import { model, Schema } from 'mongoose';

const productModel = model('Product', new Schema({
    id: String,
    name: String,
    price: Number,
    description: String,
}));

export default productModel
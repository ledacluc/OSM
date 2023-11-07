const mongoose = require('mongoose')

const productSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, unique: true },// tên
        image: { type: String, required: true }, // link ảnh
        type: { type: String, required: true }, // loại sản phẩm
        price: { type: Number, requied: true }, // giá sp
        countInStock: { type: Number, required: true }, // số lượng sản phẩm còn trong kho là bao nhiêu 
        description: { type: String, required: true },
    },
    {
        timestamps: true, // thời gian create và update 
    }
);
const Product = mongoose.model('Product', productSchema)

module.export = Product;
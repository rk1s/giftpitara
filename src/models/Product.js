import mongoose from "mongoose";
const ProductSchema = new mongoose.Schema(
    {
      title: { type: String, required: true },
      description: { type: String },
      image: { type: String },
      categories: [{ type: String }],
      size: { type: String },
      price: { type: Number, required: true },
      brand: { type: String },
      countInStock: { type: Number },
      isFeatured: { type: Boolean, default: false },
      isTrending: { type: Boolean, default: false },
      isLatest: { type: Boolean, default: false },
    //   reviews: [ReviewSchema],
    //   ratings: { type: Number },
    },
    { timestamps: true }
  );
  
  const Product = mongoose.models.Product || mongoose.model('Product', ProductSchema);
  
  export default Product;
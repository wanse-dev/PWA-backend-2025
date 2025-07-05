import mongoose, { Schema } from "mongoose";

type ProductSchemaType = {
  name: string;
  description?: string;
  amount: number;
  price: number;
  isActive: boolean;
  image?: string;
};

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    amount: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    isActive: {
      type: Boolean,
      required: true,
    },
    image: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model<ProductSchemaType>("Product", productSchema);

export default Product;

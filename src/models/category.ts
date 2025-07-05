import mongoose, { Schema, Types } from "mongoose";

type CategorySchemaType = {
  name: string;
  description?: string;
  isActive: boolean;
  products?: Types.ObjectId[];
};

const CategorySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    isActive: {
      type: Boolean,
      required: true,
    },
    products: [{ type: Schema.Types.ObjectId, ref: "Product" }],
  },
  {
    timestamps: true,
  }
);

const Category = mongoose.model<CategorySchemaType>("Category", CategorySchema);

export default Category;

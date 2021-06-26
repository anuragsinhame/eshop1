import mongoose from "mongoose";
const categorySchema = mongoose.Schema(
  {
    _id: { type: Number, required: true },
    categoryName: { type: String, required: true },
    subCategories: [
      {
        _id: Number,
        name: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Category = mongoose.model("Category", categorySchema);
export default Category;

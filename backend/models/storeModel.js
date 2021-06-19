import mongoose from "mongoose";

const storeSchema = new mongoose.Schema(
  {
    property: { type: String, required: true },
    value: { type: String },
  },
  {
    timestamps: true,
  }
);

const Store = mongoose.model("Store", storeSchema);

export default Store;

import mongoose from "mongoose";

const sliderImageSchema = new mongoose.Schema(
  {
    url: { type: String, required: true },
    description: { type: String },
    alt: { type: String },
  },
  {
    timestamps: true,
  }
);

const SliderImage = mongoose.model("SliderImage", sliderImageSchema);

export default SliderImage;

// sliderImages: [
//   {
//     id: 1,
//     url: "assets/slider/4.jpg",
//     description: "Image1",
//     alt: "Image1",
//   },

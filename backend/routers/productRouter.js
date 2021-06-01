import express from "express";
import expressAsyncHandler from "express-async-handler";

import data from "../data.js";
import Product from "../models/productModel.js";

const productRouter = express.Router();

productRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.status(200).send(products);
  })
);

productRouter.post(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    // await Product.remove({});
    const createdProducts = await Product.insertMany(data.products);
    res.status(200).send({ createdProducts });
  })
);

// kept below "seed", otherwise "seed" will be treated as id
productRouter.get(
  "/:id",
  expressAsyncHandler(async (req, res, next) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.status(200).send(product);
    } else {
      res.status(404).send({
        message: "Product Not Found",
      });
    }
  })
);

export default productRouter;

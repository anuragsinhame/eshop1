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
  expressAsyncHandler(async (req, res) => {
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

productRouter.get(
  "/category/:catId/subCategory/:subCatId",
  expressAsyncHandler(async (req, res) => {
    try {
      const catId = +req.params.catId;
      const subCatId = +req.params.subCatId;
      const products = await Product.find({
        category: catId,
        subCategory: subCatId,
      });
      if (products.length > 0) {
        res.status(201).send({
          products: products,
        });
      } else {
        res.status(404).send({ message: "Not Found" });
      }
    } catch (error) {
      res.status(404).send({ message: error.message });
    }
  })
);

productRouter.get(
  "/category/:catId",
  expressAsyncHandler(async (req, res) => {
    try {
      const catId = +req.params.catId;
      // console.log(req.params.catId);
      const products = await Product.find({
        category: catId,
      });
      if (products.length > 0) {
        res.status(201).send({
          products: products,
        });
      } else {
        res.status(404).send({ message: "Not Found" });
      }
    } catch (error) {
      res.status(404).send({ message: error.message });
    }
  })
);

productRouter.post(
  "/addProduct",
  expressAsyncHandler(async (req, res) => {
    // await Product.remove({});
    const {
      name,
      image,
      brand,
      category,
      subCategory,
      description,
      price,
      countInStock,
      discount,
      rating,
      numReviews,
    } = req.body;
    // console.log(req.body);
    // console.log("name", name);
    const newProduct = new Product({
      name,
      image,
      brand,
      category,
      subCategory,
      description,
      price,
      countInStock,
      discount,
      rating,
      numReviews,
    });
    try {
      const response = await newProduct.save();
      res.status(200).send({ response });
    } catch (error) {
      res.status(400).send({ ...error });
    }
  })
);

productRouter.put(
  "/updateProduct",
  expressAsyncHandler(async (req, res) => {
    // await Product.remove({});
    const {
      _id,
      name,
      image,
      brand,
      description,
      price,
      countInStock,
      discount,
    } = req.body;
    try {
      const response = await Product.findByIdAndUpdate(_id, {
        name,
        image,
        brand,
        description,
        price,
        countInStock,
        discount,
      });
      res.status(200).send({ response });
    } catch (error) {
      res.status(400).send({ error });
    }
  })
);

productRouter.delete(
  "/deleteProduct",
  expressAsyncHandler(async (req, res) => {
    const { prodId } = req.body;
    try {
      const response = await Product.deleteOne({ _id: prodId });
      res.status(200).send({ response });
    } catch (error) {
      res.status(404).send(error);
    }
  })
);
export default productRouter;

import express from "express";
import expressAsyncHandler from "express-async-handler";

import Category from "../models/categoryModel.js";
import data from "../data.js";
import Product from "../models/productModel.js";

const categoryRouter = express.Router();

categoryRouter.post(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    try {
      const createdCategories = await Category.insertMany(data.CategoryData);
      res.status(200).send({
        message: "Categories Added",
        categoriesAdded: createdCategories,
      });
    } catch (error) {
      res.status(404).send({ message: error.message });
    }
  })
);

categoryRouter.get(
  "/:catId/:subCatId",
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
categoryRouter.get(
  "/:catId",
  expressAsyncHandler(async (req, res) => {
    try {
      const catId = +req.params.catId;
      console.log(req.params.catId);
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
categoryRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    try {
      // console.log('Fetching Category Data');
      const CategoryData = await Category.find({});
      if (CategoryData.length > 0) {
        res.status(201).send({
          CategoryData: CategoryData,
        });
      } else {
        res.status(404).send({ message: "No Categories Created" });
      }
    } catch (error) {
      res.status(404).send({ message: error.message });
    }
  })
);

export default categoryRouter;

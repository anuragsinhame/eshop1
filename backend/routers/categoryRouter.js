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
      // console.log(req.params.catId);
      const response = await Category.findById(catId);
      if (response) {
        res.status(201).send({
          category: response,
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

categoryRouter.put(
  "/updateCategory",
  expressAsyncHandler(async (req, res) => {
    const { _id, categoryName, subCategories } = req.body;
    // console.log(req.body);
    try {
      // console.log('Fetching Category Data');
      const response = await Category.updateOne(
        { _id: _id },
        { _id, categoryName, subCategories },
        { upsert: true }
      );
      res.status(201).send({ response });
    } catch (error) {
      res.status(404).send({ message: error.message });
    }
  })
);

categoryRouter.delete(
  "/deleteCategory",
  expressAsyncHandler(async (req, res) => {
    const { _id } = req.body;
    // console.log(req.body);
    // console.log("Deleting Category " + _id);
    try {
      const response = await Category.deleteOne({ _id });
      res.status(200).send({ response });
    } catch (error) {
      res.status(404).send(error);
    }
  })
);

categoryRouter.put(
  "/updateSubCategory",
  expressAsyncHandler(async (req, res) => {
    const { catId, subCatId } = req.body;
    // console.log("SubCat Update", req.body);
    try {
      const response = await Category.updateOne(
        { _id: catId, "subCategories._id": subCatId },
        { $pull: { subCategories: { _id: subCatId } } },
        { upsert: true }
      );
      res.status(201).send({ response });
    } catch (error) {
      res.status(404).send({ message: error.message });
    }
  })
);

categoryRouter.delete(
  "/deleteSubCategory",
  expressAsyncHandler(async (req, res) => {
    const { catId, subCatId } = req.body;
    // console.log("sub", req.body);
    // console.log("Deleting Category ", catId, subCatId);
    try {
      // const response = await Category.deleteOne(
      //   { _id: catId, "subCategories._id": subCatId },
      //   { $pull: { subCategories: { _id: subCatId } } }
      // );
      const response = await Category.deleteOne(
        { _id: catId, "subCategories._id": subCatId },
        { $pull: { subCategories: { _id: subCatId } } }
      );
      res.status(200).send({ response });
    } catch (error) {
      res.status(404).send(error);
    }
  })
);

export default categoryRouter;

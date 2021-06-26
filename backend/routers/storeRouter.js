import express from "express";
import expressAsyncHandler from "express-async-handler";
import SliderImage from "../models/sliderImageModel.js";
import Store from "../models/storeModel.js";

const storeRouter = express.Router();

storeRouter.get(
  "/all",
  expressAsyncHandler(async (req, res) => {
    // await User.remove({});
    try {
      const response = await Store.find();
      res.status(200).send({ response });
    } catch (error) {
      res.status(404).send(error);
    }
  })
);

storeRouter.get(
  "/storeName",
  expressAsyncHandler(async (req, res) => {
    // await User.remove({});
    try {
      const response = await Store.findOne({ property: "StoreName" });
      res.status(200).send({ StoreName: response.value });
    } catch (error) {
      res.status(404).send(error);
    }
  })
);

storeRouter.post(
  "/storeName",
  expressAsyncHandler(async (req, res) => {
    const storeName = req.body.storeName;
    try {
      const storeData = await Store.updateOne(
        { property: "StoreName" },
        { value: storeName },
        { upsert: true }
      );
      res.status(200).send({ storeData });
    } catch (error) {
      res.status(404).send(error);
    }
  })
);

storeRouter.get(
  "/pinCodes",
  expressAsyncHandler(async (req, res) => {
    // await User.remove({});
    try {
      const response = await Store.find({ property: "PinCode" });
      res.status(200).send({ PinCodes: response });
    } catch (error) {
      res.status(404).send(error);
    }
  })
);

storeRouter.post(
  "/pinCode",
  expressAsyncHandler(async (req, res) => {
    const pinCode = req.body.pinCode;

    try {
      const response = await Store.findOneAndUpdate(
        { property: "PinCode", value: pinCode },
        { property: "PinCode", value: pinCode },
        { upsert: true, new: true }
      );
      res.status(200).send({ response });
    } catch (error) {
      res.status(404).send(error);
    }
  })
);

storeRouter.delete(
  "/pinCode",
  expressAsyncHandler(async (req, res) => {
    const pinCode = req.body.pinCode;
    // console.log("Deleting" + pinCode);
    try {
      const response = await Store.deleteOne({
        property: "PinCode",
        value: pinCode,
      });
      res.status(200).send({ response });
    } catch (error) {
      res.status(404).send(error);
    }
  })
);

storeRouter.get(
  "/sliderImages",
  expressAsyncHandler(async (req, res) => {
    // await User.remove({});
    try {
      const response = await SliderImage.find();
      res.status(200).send({ SliderImages: response });
    } catch (error) {
      res.status(404).send(error);
    }
  })
);

storeRouter.post(
  "/sliderImage",
  expressAsyncHandler(async (req, res) => {
    const { url, description, alt } = req.body;
    // console.log(url, description, alt);
    const sliderImageNew = new SliderImage({
      url,
      description,
      alt,
    });
    try {
      const response = await sliderImageNew.save();
      res.status(200).send({ response });
    } catch (error) {
      // console.log("Errrrr", error);
      res.status(404).send(error);
    }
  })
);

storeRouter.delete(
  "/sliderImage",
  expressAsyncHandler(async (req, res) => {
    const id = req.body.id;
    // console.log("Deleting" + id);
    try {
      const response = await SliderImage.deleteOne({
        _id: id,
      });
      res.status(200).send({ response });
    } catch (error) {
      res.status(404).send(error);
    }
  })
);

// userRouter.post(
//   "/signin",
//   expressAsyncHandler(async (req, res) => {
//     const user = await User.findOne({ email: req.body.email });
//     if (user) {
//       if (bcrypt.compareSync(req.body.password, user.password)) {
//         res.status(200).send({
//           _id: user._id,
//           name: user.name,
//           email: user.email,
//           isAdmin: user.isAdmin,
//           token: generateToken(user),
//         });
//         return;
//       }
//     }
//     res.status(401).send({ message: "Invalid user email or password" });
//   })
// );

// userRouter.post(
//   "/register",
//   expressAsyncHandler(async (req, res) => {
//     const user = new User({
//       name: req.body.name,
//       email: req.body.email,
//       password: bcrypt.hashSync(req.body.password, 8),
//     });
//     const createdUser = await user.save();
//     res.status(200).send({
//       _id: createdUser._id,
//       name: createdUser.name,
//       email: createdUser.email,
//       isAdmin: createdUser.isAdmin,
//       token: generateToken(createdUser),
//     });
//   })
// );

// userRouter.get(
//   "/:id",
//   expressAsyncHandler(async (req, res) => {
//     const user = await User.findById(req.params.id);
//     if (user) {
//       res.status(200).send(user);
//     } else {
//       res.status(404).send({ message: "User not found" });
//     }
//   })
// );

// userRouter.put(
//   "/profile",
//   isAuth,
//   expressAsyncHandler(async (req, res) => {
//     const user = await User.findById(req.user._id);
//     if (user) {
//       user.name = req.body.name || user.name;
//       user.email = req.body.email || user.email;
//       if (req.body.password) {
//         user.password = bcrypt.hashSync(req.body.password, 8);
//       }
//       const updatedUser = await user.save();

//       res.send({
//         _id: updatedUser._id,
//         name: updatedUser.name,
//         email: updatedUser.email,
//         isAdmin: updatedUser.isAdmin,
//         token: generateToken(updatedUser),
//       });
//     }
//   })
// );

export default storeRouter;

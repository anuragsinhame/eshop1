import dotenv from "dotenv";
import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import orderRouter from "./routers/orderRouter.js";
// import data from "./data.js";
import productRouter from "./routers/productRouter.js";
import userRouter from "./routers/userRouter.js";
import categoryRouter from "./routers/categoryRouter.js";
import storeRouter from "./routers/storeRouter.js";

dotenv.config();
const port = process.env.PORT || 4200;
const mongoUrl = process.env.MONGODB_URL || "mongodb://localhost/eshop";

const app = express();

// Setting CORS
app.use(
  cors({
    origin: "*", //change it to only be accessible by frontend - CHANGE
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(
    () => {
      console.log(`Connected to Database`);
      console.log(mongoUrl); //remove - CHANGE
    },
    (err) => {
      console.log(`Error Occcured in connecting to DB: ${err}`);
    }
  );

app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use("/api/orders", orderRouter);
app.use("/api/category", categoryRouter);
app.use("/api/store", storeRouter);

// paypal integration
app.get("/api/config/paypal", (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID || "sb"); //sb -> sandbox
});

app.get("/", (req, res, next) => {
  res.send("Server is ready");
});

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
  // console.log(`Server has been started`); // keep this for deployment- CHANGE
});

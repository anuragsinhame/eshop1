import express from "express";
import data from "./data.js";

const app = express();

const port = process.env.PORT || 4200;

app.get("/api/products", (req, res, next) => {
  res.send(data.products);
});

app.get("/", (req, res, next) => {
  res.send("Server is ready");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

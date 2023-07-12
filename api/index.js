import config from "./config.json" assert {type: "json"}
import mongoose from 'mongoose';
import express from 'express';
import productModel from "./models/products.js";
import cors from "cors"

const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.get("/products", async (req, res) => {
  return res.send(await productModel.find({}))
})

mongoose.connect(config.mongoURI, { useNewUrlParser: true }).catch(err => { }).then(() => {
  app.listen(8080)
})

mongoose.connect(config.mongoURI, { useNewUrlParser: true }).catch((err) => { }).then(() => { })
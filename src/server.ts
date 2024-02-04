import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import publicRoutes from "./Routes/Public_Route";
import authRoutes from "./Routes/Auth_Route";

import * as dotenv from "dotenv";
dotenv.config();

const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASSWORD;
const dbName = process.env.DB_NAME;

const port = process.env.PORT || 3000;

const app = express();
app.use(cors());

app.use(express.json());

app.options("*", cors());

app.use("/", publicRoutes);
app.use("/auth", authRoutes);

mongoose
  .connect(
    `mongodb+srv://${dbUser}:${dbPass}@cluster.irye11p.mongodb.net/${dbName}?retryWrites=true&w=majority`
  )
  .then(() => {
    app.listen(port);
    console.log("\n Connected to server");
    console.log(`\n Utilize a Url: http://localhost:${port}`);
  })
  .catch((error) => console.log("Erro: " + error));
import express from "express";
const route = express.Router();

route.get("/", (req, res) => {
  res.send("Welcome to Apolo Api!");
});

export default route;
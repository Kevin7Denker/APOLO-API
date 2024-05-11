import express from "express";
import UserController from "../Controllers/User_Controllers";
import UserRepository from "../Repository/User_Repository";

const route = express.Router();

const userRepository = new UserRepository();
const userController = new UserController(userRepository);

route.post("/signup", (req, res) => userController.signUp(req, res));
route.post("/signin", (req, res) => userController.signIn(req, res));

route.get("/verify-email=:token", (req, res) =>
  userController.valEmail(req, res)
);

export default route;

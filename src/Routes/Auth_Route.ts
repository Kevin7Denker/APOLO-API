import express from "express";

import AuthRepository from "../Repository/Auth_Repository";
import AuthController from "../Controllers/Auth_Controllers";

const route = express.Router();

const authRepository = new AuthRepository();
const authController = new AuthController(authRepository);

route.post("/signup", (req, res) => authController.signUp(req, res));
route.post("/signin", (req, res) => authController.signIn(req, res));

route.get("/verify-email", (req, res) => authController.valEmail(req, res));

//route.get("/verify-email/resend", (req, res) =>);

export default route;

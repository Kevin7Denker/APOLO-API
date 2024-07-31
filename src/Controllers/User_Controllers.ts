import UserRepository from "../Repository/User_Repository";

import { Request, Response } from "express";

class UserController {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  public async findUser(req: Request, res: Response) {
    const id = req.params.id;

    if (id === undefined) {
      return res.status(400).json({ error: "Invalid ID" });
    }

    try {
      const response = await this.userRepository.findUser(id);

      return res.status(200).json(response);
    } catch (error) {
      return error;
    }
  }

  public async findIdentity(req: Request, res: Response) {
    const identity = req.params.id;

    if (!identity) {
      return res.status(400).json("Invalid Identity");
    }

    try {
      const response = await this.userRepository.findIdentity(identity);

      if (response === false) {
        return res.status(401).json({
          msg: "The identity already exists",
          info: "Try another identity value",
          pass: response,
        });
      }

      if (response === true) {
        return res.status(200).json({ pass: response });
      }

      return res.status(204).json({ info: "No content" });
    } catch (error) {
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

export default UserController;

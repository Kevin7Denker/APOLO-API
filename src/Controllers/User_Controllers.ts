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
    const identity = req.params.identity;

    if (identity === undefined) {
      return res.status(400).json({ error: "Invalid Identity" });
    }

    try {
      const response = await this.userRepository.findIdentity(identity);

      if (response === false) {
        return res.status(200).json({ pass: response });
      }

      if (response === true) {
        return res.status(400).json({ error: "Identity Exists" });
      }
    } catch (error) {
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

export default UserController;

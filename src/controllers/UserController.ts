import { Request, Response} from "express";
import { getRepository } from "typeorm";
import { User } from "../models/Users";

class UserController {
  async create(request: Request, response: Response) {
    const { name, email } = request.body;

    const usersRepository = getRepository(User)

    const user = usersRepository.create({
      name, email
    })

    await usersRepository.save(user)

    return response.json(user);
  }
}

export {UserController}
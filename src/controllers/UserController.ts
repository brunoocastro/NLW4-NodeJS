import { Request, Response} from "express";
import { getRepository } from "typeorm";
import { User } from "../models/Users";

class UserController {
  async create(request: Request, response: Response) {
    const { name, email } = request.body;

    const usersRepository = getRepository(User)

    const userAlreadyExists = await usersRepository.findOne({
      email
    })

    if(userAlreadyExists) {
      console.log(`O email ${email} já foi registrado.`);
      return response.status(400).json({
        error: "User already exists!"
      })
    }

    const user = usersRepository.create({
      name, email
    })

    await usersRepository.save(user)
    console.log(`O email ${email} foi registrado com sucesso.`);
    return response.json(user);
  }
};

export { UserController };
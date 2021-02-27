import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository";
import * as yup from "yup";
import { AppError } from "../errors/AppError";

class UserController {
  async create(request: Request, response: Response) {
    const { name, email } = request.body;

    const schema = yup.object().shape({
      name: yup.string().required("O nome é obrigatório"),
      email: yup.string().email().required("O email é obrigatório"),
    });

    try {
      await schema.validate(request.body, { abortEarly: false });
    } catch (err) {
      console.log("Erro no try: ", err)
      throw new AppError(err);
    }

    const usersRepository = getCustomRepository(UsersRepository);

    const userAlreadyExists = await usersRepository.findOne({
      email,
    });
    console.log("userAlreadyExists", userAlreadyExists);

    if (userAlreadyExists) {
      throw new AppError("User already exists!");
    }

    const user = usersRepository.create({
      name,
      email,
    });
    console.log("user", user)

    await usersRepository.save(user);

    console.log(`O email ${email} foi registrado com sucesso.`);

    return response.status(201).json(user);
  }
}

export { UserController };

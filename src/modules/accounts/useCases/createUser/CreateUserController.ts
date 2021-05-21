import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateUserUseCase from './CreateUserUseCase';


export default class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { firstName, lastName, email, password } = request.body;
    const createUserUseCase = container.resolve(CreateUserUseCase);

    await createUserUseCase.execute({
      firstName,
      email,
      lastName,
      password,
    });

    return response.status(201).send();
  }
}

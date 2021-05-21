import { Request, Response } from 'express';
import { container } from 'tsyringe';
import UpdateUserUseCase from './UpdateUserUseCase';

export default class UpdateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;
    const { firstName, lastName } = request.body;

    const updateUserUseCase = container.resolve(UpdateUserUseCase);

    const user = await updateUserUseCase.execute({ id, firstName, lastName });

    delete user.id;
    delete user.password;
    delete user.isActive;
    delete user.email;

    return response.json(user);
  }
}

import { Request, Response } from 'express';
import { container } from 'tsyringe';
import UpdateUserUseCase from './UpdateUserUseCase';

export default class UpdateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;
    const { firstName, lastName } = request.body;

    const updateUserUseCase = container.resolve(UpdateUserUseCase);

    const user = await updateUserUseCase.execute({ id, firstName, lastName });

    return response.status(204).json(user);
  }
}

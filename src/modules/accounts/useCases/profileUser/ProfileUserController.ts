import { Request, Response } from 'express';
import { container } from 'tsyringe';
import ProfileUserUseCase from './ProfileUserUseCase';

export default class ProfileUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;
    const profileUserUseCase = container.resolve(ProfileUserUseCase);

    const user = await profileUserUseCase.execute(id);

    delete user.id;
    delete user.password;
    delete user.isActive;

    return response.json(user);
  }
}

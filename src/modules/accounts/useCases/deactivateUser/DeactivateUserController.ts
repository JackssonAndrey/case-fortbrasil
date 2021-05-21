import { Request, Response } from 'express';
import { container } from 'tsyringe';
import DeactivateUserUseCase from './DeactivateUserUseCase';

export default class DeactivateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;

    const deactivateSUerUSeCase = container.resolve(DeactivateUserUseCase);

    await deactivateSUerUSeCase.execute(id);

    return response.status(204).send();
  }
}

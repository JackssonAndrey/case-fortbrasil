import { Request, Response } from 'express';
import { container } from 'tsyringe';
import ChangePasswordUseCase from './ChangePasswordController';

export default class ChangePasswordController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;
    const { oldPassword, newPassword } = request.body;

    const changePasswordUseCase = container.resolve(ChangePasswordUseCase);

    await changePasswordUseCase.execute({ id, oldPassword, newPassword });

    return response.status(204).send();
  }
}

import { Request, Response } from 'express';
import { container } from 'tsyringe';
import DeactivateEstablishmentUseCase from './DeactivateEstablishmentUseCase';

export default class DeactivateEstablishmentController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deactivateEstablishmentUseCase = container.resolve(DeactivateEstablishmentUseCase);

    await deactivateEstablishmentUseCase.execute(id);

    return response.status(200).send();
  }
}

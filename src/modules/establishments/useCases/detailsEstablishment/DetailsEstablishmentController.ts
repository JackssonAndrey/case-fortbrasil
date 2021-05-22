import { Request, Response } from 'express';
import { container } from 'tsyringe';
import DetailsEstablishmentUseCase from './DetailsEstablishmentUseCase';

export default class DetailsEstablishmentController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const detailsEstablishmentUseCase = container.resolve(DetailsEstablishmentUseCase);

    const establishment = await detailsEstablishmentUseCase.execute(id);

    return response.json(establishment);
  }
}

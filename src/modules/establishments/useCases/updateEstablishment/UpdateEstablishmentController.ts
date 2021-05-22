import { Request, Response } from 'express';
import { container } from 'tsyringe';
import UpdateEstablishmentUseCase from './UpdateEstablishmentUseCase';

export default class UpdateEstablishmentController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      id,
      companyName,
      fantasyName,
      branch,
      cnpj,
      mail,
      phone,
      stateRegistration,
      municipalRegistration
    } = request.body;

    const updateEstablishmentUseCase = container.resolve(UpdateEstablishmentUseCase);

    const establishment = await updateEstablishmentUseCase.execute({
      id,
      companyName,
      fantasyName,
      branch,
      cnpj,
      mail,
      phone,
      stateRegistration,
      municipalRegistration
    });

    return response.json(establishment);
  }
}

import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateEstablishmentUseCase from './CreateEstablishmentUseCase';


export default class CreateEstablishmentController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;
    const {
      companyName,
      fantasyName,
      branch,
      cnpj,
      mail,
      phone,
      stateRegistration,
      municipalRegistration,
      street,
      city,
      complement,
      number,
      zipCode,
      latitude,
      longitude
    } = request.body;

    const createEstablishmentUseCase = container.resolve(CreateEstablishmentUseCase);

    const establishment = await createEstablishmentUseCase.execute({
      user: id,
      companyName,
      fantasyName,
      branch,
      cnpj,
      mail,
      phone,
      stateRegistration,
      municipalRegistration,
      street,
      city,
      complement,
      number,
      zipCode,
      latitude,
      longitude
    });

    return response.status(201).json(establishment);
  }
}

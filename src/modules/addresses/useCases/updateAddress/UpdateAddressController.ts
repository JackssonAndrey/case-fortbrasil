import { Request, Response } from 'express';
import { container } from 'tsyringe';
import UpdateAddressUseCase from './UpdateAddressUseCase';

export default class UpdateAddressController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      id,
      street,
      city,
      complement,
      number,
      zipCode,
      latitude,
      longitude
    } = request.body;

    const updateAddressUseCase = container.resolve(UpdateAddressUseCase);

    const address = await updateAddressUseCase.execute({
      id,
      street,
      city,
      complement,
      number,
      zipCode,
      latitude,
      longitude
    });

    return response.json(address);
  }
}

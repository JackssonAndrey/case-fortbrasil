import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateAddressUseCase from './CreateAddressUseCase';


export default class CreateAddressController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      street,
      city,
      complement,
      number,
      zipCode,
      latitude,
      longitude
    } = request.body;

    const createAddressUseCase = container.resolve(CreateAddressUseCase);

    const address = await createAddressUseCase.execute({
      street,
      city,
      complement,
      number,
      zipCode,
      latitude,
      longitude
    });

    return response.status(201).json(address);
  }
}

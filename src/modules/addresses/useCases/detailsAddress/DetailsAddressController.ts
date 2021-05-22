import { Request, Response } from 'express';
import { container } from 'tsyringe';
import DetailsAddressUseCase from './DetailsAddressUseCase';

export default class DetailsAddressController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const detailsAddressUseCase = container.resolve(DetailsAddressUseCase);

    const address = await detailsAddressUseCase.execute(id);

    return response.json(address);
  }
}

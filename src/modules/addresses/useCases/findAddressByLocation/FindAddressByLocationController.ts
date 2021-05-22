import { Request, Response } from 'express';
import { container } from 'tsyringe';
import FindAddressByLocationUseCase from './FindAddressByLocationUseCase';

export default class FindAddressByLocationController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { latitude, longitude } = request.body;
    const findAddressByLocationUseCase = container.resolve(FindAddressByLocationUseCase);

    const address = await findAddressByLocationUseCase.execute(latitude, longitude);

    return response.json(address);
  }
}

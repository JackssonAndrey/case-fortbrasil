import { Request, Response } from 'express';
import { container } from 'tsyringe';
import GetAllEstablishmentsUseCase from './GetAllEstablishmentsUseCase';

export default class GetAllEstablishmentsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;

    const getAllEstablishmentsUseCase = container.resolve(GetAllEstablishmentsUseCase);

    const all = await getAllEstablishmentsUseCase.execute(id);

    return response.json(all);
  }
}

import Establishment from '@modules/establishments/infra/typeorm/entities/Establishment';
import IEstablishmentsRepository from '@modules/establishments/repositories/IEstablishmentsRepository';
import { AppError } from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';


@injectable()
export default class GetAllEstablishmentsUseCase {
  constructor(
    @inject('EstablishmentRepository')
    private establishmentRepository: IEstablishmentsRepository
  ) {
    /*  */
  }

  async execute(userId: string): Promise<Establishment[]> {
    const establishments = await this.establishmentRepository.getAll(userId);
    if (!establishments) throw new AppError('No data to return');

    return establishments;
  }
}

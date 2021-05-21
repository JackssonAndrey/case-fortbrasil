import Establishment from '@modules/establishments/infra/typeorm/entities/Establishment';
import IEstablishmentsRepository from '@modules/establishments/repositories/IEstablishmentsRepository';
import { AppError } from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';


@injectable()
export default class DetailsEstablishmentUseCase {
  constructor(
    @inject('EstablishmentRepository')
    private establishmentRepository: IEstablishmentsRepository
  ) {
    /*  */
  }

  async execute(id: string): Promise<Establishment> {
    const establishment = await this.establishmentRepository.findById(id);
    if (!establishment) throw new AppError('Establishment not found');

    return establishment;
  }
}
import Establishment from '@modules/establishments/infra/typeorm/entities/Establishment';
import IEstablishmentsRepository from '@modules/establishments/repositories/IEstablishmentsRepository';
import { inject, injectable } from 'tsyringe';



@injectable()
export default class DeactivateEstablishmentUseCase {
  constructor(
    @inject('EstablishmentRepository')
    private establishmentRepository: IEstablishmentsRepository
  ) {
    /*  */
  }

  async execute(id: string): Promise<Establishment> {
    const establishment = await this.establishmentRepository.deactivate(id);
    return establishment;
  }
}

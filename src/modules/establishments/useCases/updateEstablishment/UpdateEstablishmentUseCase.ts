import ICreateEstablishmentDTO from '@modules/establishments/dtos/ICreateEstablishmentDTO';
import IUpdateEstablishmentDTO from '@modules/establishments/dtos/IUpdateEstablishmentDTO';
import Establishment from '@modules/establishments/infra/typeorm/entities/Establishment';
import IEstablishmentsRepository from '@modules/establishments/repositories/IEstablishmentsRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
export default class UpdateEstablishmentUseCase {
  constructor(
    @inject('EstablishmentRepository')
    private establishmentRepository: IEstablishmentsRepository
  ) {
    /*  */
  }

  async execute({
    id,
    companyName,
    fantasyName,
    branch,
    cnpj,
    mail,
    phone,
    stateRegistration,
    municipalRegistration
  }: IUpdateEstablishmentDTO): Promise<Establishment> {
    const establishment = await this.establishmentRepository.update({
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

    return establishment;
  }
}

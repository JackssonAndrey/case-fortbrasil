import ICreateEstablishmentDTO from '@modules/establishments/dtos/ICreateEstablishmentDTO';
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
  }: ICreateEstablishmentDTO): Promise<Establishment> {
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
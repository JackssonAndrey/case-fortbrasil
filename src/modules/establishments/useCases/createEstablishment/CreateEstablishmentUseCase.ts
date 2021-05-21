import ICreateEstablishmentDTO from '@modules/establishments/dtos/ICreateEstablishmentDTO';
import Establishment from '@modules/establishments/infra/typeorm/entities/Establishment';
import IEstablishmentsRepository from '@modules/establishments/repositories/IEstablishmentsRepository';
import { AppError } from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';

@injectable()
export default class CreateEstablishmentUseCase {
  constructor(
    @inject('EstablishmentRepository')
    private establishmentRepository: IEstablishmentsRepository
  ) {
    /*  */
  }

  async execute({
    companyName,
    fantasyName,
    branch,
    cnpj,
    mail,
    phone,
    user,
    stateRegistration,
    municipalRegistration
  }: ICreateEstablishmentDTO): Promise<Establishment> {
    const establishment = await this.establishmentRepository.create({
      companyName,
      fantasyName,
      branch,
      cnpj,
      mail,
      phone,
      user,
      stateRegistration,
      municipalRegistration
    });

    if (!establishment) throw new AppError('The record could not be created.');

    return establishment;
  }
}

import ICreateEstablishmentDTO from '@modules/establishments/dtos/ICreateEstablishmentDTO';
import Establishment from '@modules/establishments/infra/typeorm/entities/Establishment';
import { AppError } from '@shared/errors/AppError';
import IEstablishmentsRepository from '../IEstablishmentsRepository';

export default class EstablishmentsRepositoryInMemory implements IEstablishmentsRepository {
  establishments: Establishment[] = [];

  async create({
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
    const establishment = new Establishment();

    Object.assign(establishment, {
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

    this.establishments.push(establishment);

    return establishment;
  }

  async update({
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
    const index = this.establishments.findIndex((establishment) => establishment.id === id);

    const establishmentUpdated = {
      ...this.establishments[index],
      fantasyName,
      companyName,
      branch,
      cnpj,
      mail,
      phone,
      stateRegistration,
      municipalRegistration
    };

    this.establishments[index] = establishmentUpdated;

    return establishmentUpdated;
  }

  async findById(id: string): Promise<Establishment> {
    return this.establishments.find((establishment) => establishment.id === id);
  }

  async findByName(name: string): Promise<Establishment> {
    return this.establishments.find((establishment) => establishment.fantasyName === name);
  }

  async deactivate(id: string): Promise<Establishment> {
    const index = this.establishments.findIndex((establishment) => establishment.id === id);
    const establishment = this.establishments.find((establishment) => establishment.id === id);

    this.establishments[index].isActive = false;

    return establishment;
  }

  async findByLocation(latitude: string, longitude: string): Promise<Establishment> {
    throw new Error('Method not implemented.');
  }

  async getAll(userId: string): Promise<Establishment[]> {
    const allEstablishments = this.establishments.filter((allEstablishments) => allEstablishments.userId === userId);
    return allEstablishments;
  }

}

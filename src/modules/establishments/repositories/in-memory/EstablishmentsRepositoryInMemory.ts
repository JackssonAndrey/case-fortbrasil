import Address from '@modules/addresses/infra/typeorm/entities/Address';
import ICreateEstablishmentDTO from '@modules/establishments/dtos/ICreateEstablishmentDTO';
import IUpdateEstablishmentDTO from '@modules/establishments/dtos/IUpdateEstablishmentDTO';
import Establishment from '@modules/establishments/infra/typeorm/entities/Establishment';
import IEstablishmentsRepository from '../IEstablishmentsRepository';

export default class EstablishmentsRepositoryInMemory implements IEstablishmentsRepository {
  establishments: Establishment[] = [];
  addresses: Address[] = [];

  async create({
    companyName,
    fantasyName,
    branch,
    cnpj,
    mail,
    phone,
    user,
    stateRegistration,
    municipalRegistration,
    street,
    city,
    complement,
    number,
    zipCode,
    latitude,
    longitude
  }: ICreateEstablishmentDTO): Promise<Establishment> {
    const establishment = new Establishment();
    const address = new Address();

    Object.assign(address, {
      street,
      city,
      complement,
      number,
      zipCode,
      latitude,
      longitude
    });

    this.addresses.push(address);

    Object.assign(establishment, {
      companyName,
      fantasyName,
      branch,
      cnpj,
      mail,
      phone,
      user,
      stateRegistration,
      municipalRegistration,
      address
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
  }: IUpdateEstablishmentDTO): Promise<Establishment> {
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

  async getAll(userId: string): Promise<Establishment[]> {
    const allEstablishments = this.establishments.filter((allEstablishments) => allEstablishments.userId === userId);
    return allEstablishments;
  }

}

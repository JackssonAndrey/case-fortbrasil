import User from '@modules/accounts/infra/typeorm/entities/User';
import Address from '@modules/addresses/infra/typeorm/entities/Address';
import ICreateEstablishmentDTO from '@modules/establishments/dtos/ICreateEstablishmentDTO';
import IEstablishmentsRepository from '@modules/establishments/repositories/IEstablishmentsRepository';
import { getRepository, Repository } from 'typeorm';
import Establishment from '../entities/Establishment';

export default class EstablishmentsRepository implements IEstablishmentsRepository {
  private repository: Repository<Establishment>;
  private userRepository: Repository<User>;
  private addressRepository: Repository<Address>;

  constructor() {
    this.repository = getRepository(Establishment);
    this.userRepository = getRepository(User);
    this.addressRepository = getRepository(Address);
  }

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
    const userData = await this.userRepository.findOne(user);

    const address = this.addressRepository.create({
      street,
      city,
      complement,
      number,
      zipCode,
      latitude,
      longitude
    });

    await this.addressRepository.save(address);

    const establishment = this.repository.create({
      companyName,
      fantasyName,
      branch,
      cnpj,
      mail,
      phone,
      user: userData,
      stateRegistration,
      municipalRegistration,
      address,
    });

    await this.repository.save(establishment);

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
    const establishment = await this.repository.findOne(id);

    establishment.companyName = companyName;
    establishment.fantasyName = fantasyName;
    establishment.branch = branch;
    establishment.cnpj = cnpj;
    establishment.mail = mail;
    establishment.phone = phone;
    establishment.stateRegistration = stateRegistration;
    establishment.municipalRegistration = municipalRegistration;

    await this.repository.save(establishment);

    return establishment;
  }

  async findById(id: string): Promise<Establishment> {
    const establishment = await this.repository.findOne({ where: { id, isActive: true }, relations: ['addresses'] });
    return establishment;
  }

  async findByName(name: string): Promise<Establishment> {
    const establishment = await this.repository.findOne({
      where: {
        companyName: name,
        isActive: true
      },
      relations: ['addresses']
    });
    return establishment;
  }

  async deactivate(id: string): Promise<Establishment> {
    const establishment = await this.repository.findOne({ where: { id, isActive: true } });

    establishment.isActive = false;

    await this.repository.save(establishment);

    return establishment;
  }

  async getAll(userId: string): Promise<Establishment[]> {
    const establishments = await this.repository.find({ where: { userId, isActive: true } });
    return establishments;
  }
}

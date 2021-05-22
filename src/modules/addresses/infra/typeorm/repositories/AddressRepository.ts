import ICreateAddressDTO from '@modules/addresses/dtos/ICreateAddressDTO';
import IAddressRepository from '@modules/addresses/repositories/IAddressRepository';
import { AppError } from '@shared/errors/AppError';
import { getRepository, Repository } from 'typeorm';
import Address from '../entities/Address';

export default class AddressRepository implements IAddressRepository {
  private repository: Repository<Address>;

  constructor() {
    this.repository = getRepository(Address);
  }

  async create({
    street,
    city,
    complement,
    number,
    zipCode,
    latitude,
    longitude
  }: ICreateAddressDTO): Promise<Address> {
    const address = this.repository.create({
      street,
      city,
      complement,
      number,
      zipCode,
      latitude,
      longitude
    });

    await this.repository.save(address);

    return address;
  }

  async findById(id: string): Promise<Address> {
    const address = await this.repository.findOne(id);
    if (!address) throw new AppError('Address not found');

    return address;
  }

  async findByLocation(latitude: string, longitude: string): Promise<Address> {
    const address = await this.repository.findOne({
      where: {
        latitude,
        longitude
      }
    });
    if (!address) throw new AppError('Address not found');

    return address;
  }

  async update({
    id,
    street,
    city,
    complement,
    number,
    zipCode,
    latitude,
    longitude
  }: ICreateAddressDTO): Promise<Address> {
    const address = await this.repository.findOne(id);
    if (!address) throw new AppError('Address not found');

    address.street = street;
    address.city = city;
    address.complement = complement;
    address.number = number;
    address.zipCode = zipCode;
    address.latitude = latitude;
    address.longitude = longitude;

    await this.repository.save(address);

    return address;
  }

}

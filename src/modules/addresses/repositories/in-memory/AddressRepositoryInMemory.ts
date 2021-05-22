import ICreateAddressDTO from '@modules/addresses/dtos/ICreateAddressDTO';
import Address from '@modules/addresses/infra/typeorm/entities/Address';
import IAddressRepository from '../IAddressRepository';

export default class AddressRepositoryInMemory implements IAddressRepository {
  addresses: Address[] = [];

  async create({
    street,
    city,
    complement,
    number,
    zipCode,
    latitude,
    longitude
  }: ICreateAddressDTO): Promise<Address> {
    const address = new Address();

    Object.assign(address, [
      street,
      city,
      complement,
      number,
      zipCode,
      latitude,
      longitude
    ]);

    this.addresses.push(address);

    return address;
  }

  async findById(id: string): Promise<Address> {
    return this.addresses.find((address) => address.id === id);
  }

  async findByLocation(latitude: string, longitude: string): Promise<Address> {
    const address = this.addresses.find((address) => address.latitude === latitude && address.longitude === longitude);
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
    const index = this.addresses.findIndex((address) => address.id === id);

    const addressUpdated = {
      ...this.addresses[index],
      street,
      city,
      complement,
      number,
      zipCode,
      latitude,
      longitude
    };

    this.addresses[index] = addressUpdated;

    return addressUpdated;
  }
}

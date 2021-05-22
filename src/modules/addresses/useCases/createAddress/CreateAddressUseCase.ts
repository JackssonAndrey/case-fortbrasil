import ICreateAddressDTO from '@modules/addresses/dtos/ICreateAddressDTO';
import Address from '@modules/addresses/infra/typeorm/entities/Address';
import IAddressRepository from '@modules/addresses/repositories/IAddressRepository';
import { inject, injectable } from 'tsyringe';


@injectable()
export default class CreateAddressUseCase {
  constructor(
    @inject('AddressRepository')
    private addressRepository: IAddressRepository
  ) {
    /*  */
  }

  async execute({
    street,
    city,
    complement,
    number,
    zipCode,
    latitude,
    longitude
  }: ICreateAddressDTO): Promise<Address> {
    const address = await this.addressRepository.create({
      street,
      city,
      complement,
      number,
      zipCode,
      latitude,
      longitude
    });

    return address;
  }
}

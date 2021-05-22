import Address from '@modules/addresses/infra/typeorm/entities/Address';
import IAddressRepository from '@modules/addresses/repositories/IAddressRepository';
import { inject, injectable } from 'tsyringe';


@injectable()
export default class FindAddressByLocationUseCase {
  constructor(
    @inject('AddressRepository')
    private addressRepository: IAddressRepository
  ) {
    /*  */
  }

  async execute(latitude: string, longitude: string): Promise<Address> {
    const address = await this.addressRepository.findByLocation(latitude, longitude);
    return address;
  }
}

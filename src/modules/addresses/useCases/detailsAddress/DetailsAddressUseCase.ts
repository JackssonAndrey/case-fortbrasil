import Address from '@modules/addresses/infra/typeorm/entities/Address';
import IAddressRepository from '@modules/addresses/repositories/IAddressRepository';
import { inject, injectable } from 'tsyringe';


@injectable()
export default class DetailsAddressUseCase {
  constructor(
    @inject('AddressRepository')
    private addressRepository: IAddressRepository
  ) {
    /*  */
  }

  async execute(id: string): Promise<Address> {
    const address = await this.addressRepository.findById(id);
    return address;
  }
}

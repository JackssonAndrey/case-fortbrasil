import ICreateAddressDTO from '@modules/addresses/dtos/ICreateAddressDTO';
import Address from '@modules/addresses/infra/typeorm/entities/Address';
import IAddressRepository from '@modules/addresses/repositories/IAddressRepository';
import { inject, injectable } from 'tsyringe';


@injectable()
export default class UpdateAddressUseCase {
  constructor(
    @inject('AddressRepository')
    private addressRepository: IAddressRepository
  ) {
    /*  */
  }

  async execute(data: ICreateAddressDTO): Promise<Address> {
    const address = this.addressRepository.update(data);
    return address;
  }
}

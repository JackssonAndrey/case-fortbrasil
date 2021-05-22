import ICreateAddressDTO from '../dtos/ICreateAddressDTO';
import Address from '../infra/typeorm/entities/Address';

export default interface IAddressRepository {
  create(data: ICreateAddressDTO): Promise<Address>;
  findById(id: string): Promise<Address>;
  findByLocation(latitude: string, longitude: string): Promise<Address>;
  update(data: ICreateAddressDTO): Promise<Address>;
}

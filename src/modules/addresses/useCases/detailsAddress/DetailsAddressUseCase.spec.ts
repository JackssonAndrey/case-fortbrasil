import AddressRepositoryInMemory from '@modules/addresses/repositories/in-memory/AddressRepositoryInMemory';
import CreateAddressUseCase from '../createAddress/CreateAddressUseCase';
import DetailsAddressUseCase from './DetailsAddressUseCase';

let createAddressUseCase: CreateAddressUseCase;
let detailsAddressUseCase: DetailsAddressUseCase;
let addressRepositoryInMemory: AddressRepositoryInMemory;

describe('Details Address', () => {
  beforeEach(() => {
    addressRepositoryInMemory = new AddressRepositoryInMemory();
    createAddressUseCase = new CreateAddressUseCase(addressRepositoryInMemory);
    detailsAddressUseCase = new DetailsAddressUseCase(addressRepositoryInMemory);
  });

  it('should be able to show details of the address', async () => {
    const address = await createAddressUseCase.execute({
      street: 'Street test',
      city: 'City test',
      complement: 'Complement test',
      number: '9090',
      zipCode: '2323.230',
      latitude: '2930i2039',
      longitude: '343209023'
    });

    const result = await detailsAddressUseCase.execute(address.id);

    expect(result).toHaveProperty('id');
  });
});

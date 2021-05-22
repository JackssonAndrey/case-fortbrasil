import AddressRepositoryInMemory from '@modules/addresses/repositories/in-memory/AddressRepositoryInMemory';
import CreateAddressUseCase from './CreateAddressUseCase';

let createAddressUseCase: CreateAddressUseCase;
let addressRepositoryInMemory: AddressRepositoryInMemory;

describe('Create Address', () => {
  beforeEach(() => {
    addressRepositoryInMemory = new AddressRepositoryInMemory();
    createAddressUseCase = new CreateAddressUseCase(addressRepositoryInMemory);
  });

  it('should be able to create a new address', async () => {
    const address = await createAddressUseCase.execute({
      street: 'Street test',
      city: 'City test',
      complement: 'Complement test',
      number: '9090',
      zipCode: '2323.230',
      latitude: '2930i2039',
      longitude: '343209023'
    });

    expect(address).toHaveProperty('id');
  });
});

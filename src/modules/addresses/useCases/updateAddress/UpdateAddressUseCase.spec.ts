import AddressRepositoryInMemory from '@modules/addresses/repositories/in-memory/AddressRepositoryInMemory';
import CreateAddressUseCase from '../createAddress/CreateAddressUseCase';
import UpdateAddressUseCase from './UpdateAddressUseCase';

let createAddressUseCase: CreateAddressUseCase;
let addressRepositoryInMemory: AddressRepositoryInMemory;
let updateAddressUseCase: UpdateAddressUseCase;

describe('Update Address', () => {
  beforeEach(() => {
    addressRepositoryInMemory = new AddressRepositoryInMemory();
    createAddressUseCase = new CreateAddressUseCase(addressRepositoryInMemory);
    updateAddressUseCase = new UpdateAddressUseCase(addressRepositoryInMemory);
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

    const result = await updateAddressUseCase.execute({
      id: address.id,
      street: 'Street Updated',
      city: 'City Updated',
      complement: 'Complement Updated',
      number: '9090',
      zipCode: '2323.230',
      latitude: '2930i2039',
      longitude: '343209023'
    })

    expect(result.street).toBe('Street Updated');
    expect(result).toHaveProperty('id');
  });
});

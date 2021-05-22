import AddressRepositoryInMemory from '@modules/addresses/repositories/in-memory/AddressRepositoryInMemory';
import CreateAddressUseCase from '../createAddress/CreateAddressUseCase';
import FindAddressByLocationUseCase from './FindAddressByLocationUseCase';

let createAddressUseCase: CreateAddressUseCase;
let findAddressByLocation: FindAddressByLocationUseCase;
let addressRepositoryInMemory: AddressRepositoryInMemory;

describe('Find Address by location', () => {
  beforeEach(() => {
    addressRepositoryInMemory = new AddressRepositoryInMemory();
    createAddressUseCase = new CreateAddressUseCase(addressRepositoryInMemory);
    findAddressByLocation = new FindAddressByLocationUseCase(addressRepositoryInMemory);
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

    const result = await findAddressByLocation.execute(address.latitude, address.longitude);

    expect(result).toHaveProperty('id');
  });
});

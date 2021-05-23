import EstablishmentsRepositoryInMemory from '@modules/establishments/repositories/in-memory/EstablishmentsRepositoryInMemory';
import CreateEstablishmentUseCase from '../createEstablishment/CreateEstablishmentUseCase';
import DeactivateEstablishmentUseCase from './DeactivateEstablishmentUseCase';
import { v4 as uuid } from 'uuid';

let createEstablishmentUseCase: CreateEstablishmentUseCase;
let establishmentRepositoryInMemory: EstablishmentsRepositoryInMemory;
let deactivateEstablishmentUseCase: DeactivateEstablishmentUseCase;

describe('Deactivate Establishment', () => {
  beforeEach(() => {
    establishmentRepositoryInMemory = new EstablishmentsRepositoryInMemory();
    createEstablishmentUseCase = new CreateEstablishmentUseCase(establishmentRepositoryInMemory);
    deactivateEstablishmentUseCase = new DeactivateEstablishmentUseCase(establishmentRepositoryInMemory);
  });

  it('should be able to deactivate establishment', async () => {
    const establishment = await createEstablishmentUseCase.execute({
      companyName: 'Name test',
      fantasyName: 'Name teste',
      cnpj: '10.000.000/0001-00',
      branch: 'Branch test',
      user: uuid(),
      mail: 'example@email.com',
      municipalRegistration: '343430',
      stateRegistration: '232320',
      phone: '(85) 9 9999-9999',
      street: 'Street test',
      city: 'City test',
      complement: 'Complement test',
      number: '9090',
      zipCode: '2323.230',
      latitude: '2930i2039',
      longitude: '343209023'
    });

    const result = await deactivateEstablishmentUseCase.execute(establishment.id)

    expect(result).toHaveProperty('id');
    expect(result.isActive).toBe(false);
  });
});

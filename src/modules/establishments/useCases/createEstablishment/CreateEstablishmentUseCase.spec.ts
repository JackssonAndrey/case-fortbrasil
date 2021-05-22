import ICreateEstablishmentDTO from '@modules/establishments/dtos/ICreateEstablishmentDTO';
import EstablishmentsRepositoryInMemory from '@modules/establishments/repositories/in-memory/EstablishmentsRepositoryInMemory';
import CreateEstablishmentUseCase from './CreateEstablishmentUseCase';
import { v4 as uuid } from 'uuid';

let createEstablishmentUseCase: CreateEstablishmentUseCase;
let establishmentRepositoryInMemory: EstablishmentsRepositoryInMemory;

describe('Create Establishment', () => {
  beforeEach(() => {
    establishmentRepositoryInMemory = new EstablishmentsRepositoryInMemory();
    createEstablishmentUseCase = new CreateEstablishmentUseCase(establishmentRepositoryInMemory);
  });

  it('should be able to create a new establishment', async () => {
    const data: ICreateEstablishmentDTO = {
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
    }

    const establishment = await createEstablishmentUseCase.execute(data);

    expect(establishment).toHaveProperty('id');
  });
});

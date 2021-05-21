import { v4 as uuid } from 'uuid';

import ICreateEstablishmentDTO from '@modules/establishments/dtos/ICreateEstablishmentDTO';
import EstablishmentsRepositoryInMemory from '@modules/establishments/repositories/in-memory/EstablishmentsRepositoryInMemory';
import CreateEstablishmentUseCase from '../createEstablishment/CreateEstablishmentUseCase';
import GetAllEstablishmentsUseCase from './GetAllEstablishmentsUseCase';

let createEstablishmentUseCase: CreateEstablishmentUseCase;
let establishmentRepositoryInMemory: EstablishmentsRepositoryInMemory;
let getAllEstablishmentsUseCase: GetAllEstablishmentsUseCase;

describe('Get all establishments', () => {
  beforeEach(() => {
    establishmentRepositoryInMemory = new EstablishmentsRepositoryInMemory();
    createEstablishmentUseCase = new CreateEstablishmentUseCase(establishmentRepositoryInMemory);
    getAllEstablishmentsUseCase = new GetAllEstablishmentsUseCase(establishmentRepositoryInMemory);
  });

  it('should be able to get all establishments of user', async () => {
    const userId = uuid();

    const establishment = await createEstablishmentUseCase.execute({
      companyName: 'Name test',
      fantasyName: 'Name teste',
      cnpj: '10.000.000/0001-00',
      branch: 'Branch test',
      user: userId,
      mail: 'example@email.com',
      municipalRegistration: '343430',
      stateRegistration: '232320',
      phone: '(85) 9 9999-9999',
    });

    await createEstablishmentUseCase.execute({
      companyName: 'Name test 2',
      fantasyName: 'Name teste 2',
      cnpj: '10.111.000/0001-00',
      branch: 'Branch test',
      user: userId,
      mail: 'example@email.com',
      municipalRegistration: '343430',
      stateRegistration: '232320',
      phone: '(85) 9 9999-9999',
    });

    const establishments = await getAllEstablishmentsUseCase.execute(userId);

    expect(establishments).toEqual([establishment]);
  });
});

import UsersRepository from '@modules/accounts/infra/typeorm/repositories/UsersRepository';
import IUsersRepository from '@modules/accounts/repositories/IUsersRepository';
import AddressRepository from '@modules/addresses/infra/typeorm/repositories/AddressRepository';
import IAddressRepository from '@modules/addresses/repositories/IAddressRepository';
import EstablishmentsRepository from '@modules/establishments/infra/typeorm/repositories/EstablishmentsRepository';
import IEstablishmentsRepository from '@modules/establishments/repositories/IEstablishmentsRepository';
import { container } from 'tsyringe';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository
);

container.registerSingleton<IEstablishmentsRepository>(
  'EstablishmentRepository',
  EstablishmentsRepository
);

container.registerSingleton<IAddressRepository>(
  'AddressRepository',
  AddressRepository
);

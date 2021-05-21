import UsersRepository from '@modules/accounts/infra/typeorm/repositories/UsersRepository';
import IUsersRepository from '@modules/accounts/repositories/IUsersRepository';
import EstablishmentsRepsitory from '@modules/establishments/infra/typeorm/repositories/EstablishmentsRepository';
import IEstablishmentsRepository from '@modules/establishments/repositories/IEstablishmentsRepository';
import { container } from 'tsyringe';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository
);

container.registerSingleton<IEstablishmentsRepository>(
  'EstablishmentRepository',
  EstablishmentsRepsitory
);

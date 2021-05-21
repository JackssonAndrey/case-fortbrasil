import ICreateUserDTO from '@modules/accounts/dtos/ICreateUserDTO';
import UserRepositoryInMemory from '@modules/accounts/repositories/in-memory/UserRepositoryInMemory';
import { AppError } from '@shared/errors/AppError';
import CreateUserUseCase from './CreateUserUseCase';

let usersRepositoryInMemory: UserRepositoryInMemory;
let createUserUseCase: CreateUserUseCase;

describe('Create user', () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UserRepositoryInMemory();
    createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);
  });

  it('should be able to create a new user', async () => {
    const user: ICreateUserDTO = {
      firstName: 'User',
      lastName: 'Example',
      email: 'example@example.com',
      password: '1234',
    };

    const result = await createUserUseCase.execute(user);

    expect(result).toHaveProperty('id');
  });

  it('should not be able to create a new user with email existent', () => {
    expect(async () => {
      const user: ICreateUserDTO = {
        firstName: 'User',
        lastName: 'Example',
        email: 'example@example.com',
        password: '1234',
      };

      await createUserUseCase.execute(user);
      await createUserUseCase.execute(user);
    }).rejects.toBeInstanceOf(AppError);
  });
});

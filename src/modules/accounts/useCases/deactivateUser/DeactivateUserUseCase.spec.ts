import ICreateUserDTO from '@modules/accounts/dtos/ICreateUserDTO';
import UserRepositoryInMemory from '@modules/accounts/repositories/in-memory/UserRepositoryInMemory';
import { AuthenticateUserUseCase } from '../authenticateUser/AuthenticateUserUseCase';
import CreateUserUseCase from '../createUser/CreateUserUseCase';
import DeactivateUserUseCase from './DeactivateUserUseCase';

let usersRepositoryInMemory: UserRepositoryInMemory;
let createUserUseCase: CreateUserUseCase;
let deactivateUserUseCase: DeactivateUserUseCase;
let authenticateUserUseCase: AuthenticateUserUseCase;

describe('Deactivate user', () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UserRepositoryInMemory();
    createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);
    deactivateUserUseCase = new DeactivateUserUseCase(usersRepositoryInMemory);
    authenticateUserUseCase = new AuthenticateUserUseCase(usersRepositoryInMemory);
  });

  it('should be able to deactivate user account', async () => {
    const userData: ICreateUserDTO = {
      firstName: 'User',
      lastName: 'Example',
      email: 'example@example.com',
      password: '1234',
    };

    await createUserUseCase.execute(userData);

    const userLogged = await authenticateUserUseCase.execute({
      email: userData.email,
      password: userData.password
    });

    const result = await deactivateUserUseCase.execute(userLogged.user.id);

    expect(result.isActive).toBe(false);
  });
});

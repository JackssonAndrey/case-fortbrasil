import ICreateUserDTO from '@modules/accounts/dtos/ICreateUserDTO';
import UserRepositoryInMemory from '@modules/accounts/repositories/in-memory/UserRepositoryInMemory';
import { AuthenticateUserUseCase } from '../authenticateUser/AuthenticateUserUseCase';
import CreateUserUseCase from '../createUser/CreateUserUseCase';
import ProfileUserUseCase from './ProfileUserUseCase';

let usersRepositoryInMemory: UserRepositoryInMemory;
let createUserUseCase: CreateUserUseCase;
let authenticateUserUseCase: AuthenticateUserUseCase;
let profileUserUseCase: ProfileUserUseCase;

describe('Profile user', () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UserRepositoryInMemory();
    profileUserUseCase = new ProfileUserUseCase(usersRepositoryInMemory);
    authenticateUserUseCase = new AuthenticateUserUseCase(usersRepositoryInMemory);
    createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);
  });

  it('should be able to get data of user logged', async () => {
    const userData: ICreateUserDTO = {
      firstName: 'User',
      lastName: 'Example',
      email: 'example@example.com',
      password: '1234',
    };

    await createUserUseCase.execute(userData);

    const { user } = await authenticateUserUseCase.execute({ email: userData.email, password: userData.password });

    const result = await profileUserUseCase.execute(user.id);

    expect(result).toHaveProperty('id');
    expect(result).toHaveProperty('firstName');
  });
});

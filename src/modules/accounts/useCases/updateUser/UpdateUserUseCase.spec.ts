import ICreateUserDTO from '@modules/accounts/dtos/ICreateUserDTO';
import IUpdateUserDTO from '@modules/accounts/dtos/IUpdateUserDTO';
import UserRepositoryInMemory from '@modules/accounts/repositories/in-memory/UserRepositoryInMemory';
import CreateUserUseCase from '../createUser/CreateUserUseCase';
import UpdateUserUseCase from './UpdateUserUseCase';

let usersRepositoryInMemory: UserRepositoryInMemory;
let createUserUseCase: CreateUserUseCase;
let updateUSerUseCase: UpdateUserUseCase;

describe('Update User', () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UserRepositoryInMemory();
    createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);
    updateUSerUseCase = new UpdateUserUseCase(usersRepositoryInMemory);
  });

  it('should be able to update user', async () => {
    const userData: ICreateUserDTO = {
      firstName: 'User',
      lastName: 'Example',
      email: 'example@example.com',
      password: '1234',
    };

    const { id } = await createUserUseCase.execute(userData);

    const userUpdated = await updateUSerUseCase.execute({
      id,
      firstName: 'User Updated',
      lastName: 'Example Updated'
    });

    expect(userUpdated.id).toEqual(id);
    expect(userData).toHaveProperty('firstName');
  });
})

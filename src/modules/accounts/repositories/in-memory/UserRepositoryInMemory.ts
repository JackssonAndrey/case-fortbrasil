import ICreateUserDTO from '@modules/accounts/dtos/ICreateUserDTO';
import IUpdateUserDTO from '@modules/accounts/dtos/IUpdateUserDTO';
import User from '@modules/accounts/infra/typeorm/entities/User';
import { AppError } from '@shared/errors/AppError';
import { compare, hash } from 'bcrypt';
import IUsersRepository from '../IUsersRepository';

export default class UserRepositoryInMemory implements IUsersRepository {
  users: User[] = [];

  async create({
    firstName,
    lastName,
    email,
    password,
  }: ICreateUserDTO): Promise<User> {
    const user = new User();

    Object.assign(user, {
      firstName,
      lastName,
      email,
      password,
    });

    this.users.push(user);

    return user;
  }

  async findByEmail(email: string): Promise<User> {
    return this.users.find((user) => user.email === email);
  }

  async findById(id: string): Promise<User> {
    return this.users.find((user) => user.id === id);
  }

  async update({ id, firstName, lastName }: IUpdateUserDTO): Promise<User> {
    const userIndex = this.users.findIndex((user) => user.id === id);

    const userUpdated = { ...this.users[userIndex], firstName, lastName };

    this.users[userIndex] = userUpdated;

    return userUpdated;
  }

  async deactivate(id: string): Promise<User> {
    const user = this.users.find((user) => user.id === id);
    const userIndex = this.users.findIndex((user) => user.id === id);

    this.users[userIndex].isActive = false;

    return user;
  }

  async changePassword(id: string, oldPassword: string, newPassword: string): Promise<void> {
    const user = this.users.find((user) => user.id === id);
    const userIndex = this.users.findIndex((user) => user.id === id);

    const passwordMatch = await compare(oldPassword, user.password);
    if (!passwordMatch) {
      throw new AppError('Old password incorrect');
    }

    this.users[userIndex].password = await hash(newPassword, 8);
  }
}

import { getRepository, Repository } from 'typeorm';
import { compare, hash } from 'bcrypt';

import User from '../entities/User';
import ICreateUserDTO from '@modules/accounts/dtos/ICreateUserDTO';
import { AppError } from '@shared/errors/AppError';
import IUsersRepository from '@modules/accounts/repositories/IUsersRepository';
import IUpdateUserDTO from '@modules/accounts/dtos/IUpdateUserDTO';

export default class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async create({
    firstName,
    lastName,
    email,
    password,
    id,
  }: ICreateUserDTO): Promise<User> {
    const user = this.repository.create({
      firstName,
      lastName,
      email,
      password,
      id,
    });

    await this.repository.save(user);

    return user;
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.repository.findOne({ email });

    return user;
  }

  async findById(id: string): Promise<User> {
    const user = await this.repository.findOne(id);

    return user;
  }

  async update({ id, firstName, lastName }: IUpdateUserDTO): Promise<User> {
    const user = await this.repository.findOne(id);

    user.firstName = firstName;
    user.lastName = lastName;

    await this.repository.save(user);

    return user;
  }

  async deactivate(id: string): Promise<User> {
    const user = await this.repository.findOne(id);

    user.isActive = false;

    await this.repository.save(user);

    return user;
  }

  async changePassword(id: string, oldPassword: string, newPassword: string): Promise<void> {
    const user = await this.repository.findOne(id);

    const passwordMatch = await compare(oldPassword, user.password);
    if (!passwordMatch) {
      throw new AppError('Old password incorrect');
    }

    user.password = await hash(newPassword, 8);

    await this.repository.save(user);
  }
}

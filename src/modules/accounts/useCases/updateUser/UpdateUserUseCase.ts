import ICreateUserDTO from '@modules/accounts/dtos/ICreateUserDTO';
import IUpdateUserDTO from '@modules/accounts/dtos/IUpdateUserDTO';
import User from '@modules/accounts/infra/typeorm/entities/User';
import IUsersRepository from '@modules/accounts/repositories/IUsersRepository';
import { AppError } from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';


@injectable()
export default class UpdateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {
    /*  */
  }

  async execute(data: IUpdateUserDTO): Promise<User> {
    const user = await this.usersRepository.update(data);
    if (!user) throw new AppError('User not found');
    return user;
  }
}

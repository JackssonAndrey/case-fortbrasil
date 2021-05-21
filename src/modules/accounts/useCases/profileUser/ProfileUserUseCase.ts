import User from '@modules/accounts/infra/typeorm/entities/User';
import IUsersRepository from '@modules/accounts/repositories/IUsersRepository';
import { AppError } from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';


@injectable()
export default class ProfileUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {
    /*  */
  }

  async execute(id: string): Promise<User> {
    const user = await this.usersRepository.findById(id)
    if (!user) throw new AppError('USer not found')

    return user;
  }
}

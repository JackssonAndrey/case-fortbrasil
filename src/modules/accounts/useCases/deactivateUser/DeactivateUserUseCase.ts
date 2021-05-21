import User from '@modules/accounts/infra/typeorm/entities/User';
import IUsersRepository from '@modules/accounts/repositories/IUsersRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
export default class DeactivateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {
    /*  */
  }

  async execute(id: string): Promise<User> {
    const user = await this.usersRepository.deactivate(id);

    return user;
  }
}

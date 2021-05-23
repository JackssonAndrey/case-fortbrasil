import IUsersRepository from '@modules/accounts/repositories/IUsersRepository';
import { inject, injectable } from 'tsyringe';

interface IRequest {
  id: string;
  oldPassword: string;
  newPassword: string;
}

@injectable()
export default class ChangePasswordUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {
    /*  */
  }

  async execute({ id, oldPassword, newPassword }: IRequest): Promise<void> {
    await this.usersRepository.changePassword(id, oldPassword, newPassword);
    return;
  }
}

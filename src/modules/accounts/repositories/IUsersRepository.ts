import ICreateUserDTO from '../dtos/ICreateUserDTO';
import IUpdateUserDTO from '../dtos/IUpdateUserDTO';
import User from '../infra/typeorm/entities/User';


export default interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<User>;
  findByEmail(email: string): Promise<User>;
  findById(id: string): Promise<User>;
  update(data: IUpdateUserDTO): Promise<User>;
  deactivate(id: string): Promise<User>;
  changePassword(id: string, oldPassword: string, newPassword: string): Promise<void>;
}

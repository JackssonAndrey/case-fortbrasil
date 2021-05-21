import ICreateEstablishmentDTO from '../dtos/ICreateEstablishmentDTO';
import Establishment from '../infra/typeorm/entities/Establishment';

export default interface IEstablishmentsRepository {
  create(data: ICreateEstablishmentDTO): Promise<Establishment>;
  update(data: ICreateEstablishmentDTO): Promise<Establishment>;
  findById(id: string): Promise<Establishment>;
  findByName(name: string): Promise<Establishment>;
  deactivate(id: string): Promise<Establishment>;
  findByLocation(latitude: string, longitude: string): Promise<Establishment>;
  getAll(userId: string): Promise<Establishment[]>;
}

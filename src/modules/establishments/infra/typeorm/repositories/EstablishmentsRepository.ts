import ICreateEstablishmentDTO from '@modules/establishments/dtos/ICreateEstablishmentDTO';
import IEstablishmentsRepository from '@modules/establishments/repositories/IEstablishmentsRepository';
import Establishment from '../entities/Establishment';

export default class EstablishmentsRepsitory implements IEstablishmentsRepository {
  create(data: ICreateEstablishmentDTO): Promise<Establishment> {
    throw new Error('Method not implemented.');
  }
  update(data: ICreateEstablishmentDTO): Promise<Establishment> {
    throw new Error('Method not implemented.');
  }
  findById(id: string): Promise<Establishment> {
    throw new Error('Method not implemented.');
  }
  findByName(name: string): Promise<Establishment> {
    throw new Error('Method not implemented.');
  }
  deactivate(id: string): Promise<Establishment> {
    throw new Error('Method not implemented.');
  }
  findByLocation(latitude: string, longitude: string): Promise<Establishment> {
    throw new Error('Method not implemented.');
  }
  getAll(userId: string): Promise<Establishment[]> {
    throw new Error('Method not implemented.');
  }
}

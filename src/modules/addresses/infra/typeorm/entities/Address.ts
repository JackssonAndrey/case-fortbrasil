import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('addresses')
export default class Address {
  @PrimaryColumn()
  id: string;

  @Column()
  street: string;

  @Column()
  zipCode: string;

  @Column()
  number: string;

  @Column()
  complement: string;

  @Column()
  city: string;

  @Column()
  latitude: string;

  @Column()
  longitude: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

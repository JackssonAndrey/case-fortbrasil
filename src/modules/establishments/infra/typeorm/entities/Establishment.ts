import User from '@modules/accounts/infra/typeorm/entities/User';
import Address from '@modules/addresses/infra/typeorm/entities/Address';
import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('establishments')
export default class Establishment {
  @PrimaryColumn()
  id: string;

  @Column()
  userId: string;

  @OneToOne(() => User)
  @JoinColumn({ name: 'userId' })
  user: User;

  @Column()
  addressId: string;

  @OneToOne(() => Address)
  @JoinColumn({ name: 'addressId' })
  address: Address;

  @Column()
  companyName: string;

  @Column()
  fantasyName: string;

  @Column()
  branch: string;

  @Column()
  cnpj: string;

  @Column()
  stateRegistration: string;

  @Column()
  municipalRegistration: string;

  @Column()
  phone: string;

  @Column()
  mail: string;

  @Column()
  isActive: boolean;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

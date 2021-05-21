import User from '@modules/accounts/infra/typeorm/entities/User';
import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('establishments')
export default class Establishment {
  @PrimaryColumn()
  id: string;

  @OneToOne(() => User)
  @JoinColumn()
  user: User;

  @Column()
  userId: string;

  @Column()
  addressId: string;

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

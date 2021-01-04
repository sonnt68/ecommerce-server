import { Column, Entity, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn, OneToMany, OneToOne, JoinColumn } from 'typeorm';
import { AddressEntity } from './address.entity';
import { CardEntity } from './card.entity';
import { ContactEntity } from './contact.entity';
import { UserEntity } from './user.entity';

@Entity('customer')
export class CustomerEntity extends UserEntity{
  @PrimaryGeneratedColumn('increment', { type : 'bigint'})
  id: string;

  @OneToMany(() => AddressEntity, address => address.customer)
  addresses: AddressEntity[];

  @OneToMany(() => ContactEntity, contact => contact.customer)
  contacts: ContactEntity[];

  @OneToMany(() => CardEntity, card => card.customer)
  cards: CardEntity[];

  @Column({ default: false })
  has_blocked: boolean;

  @Column({ type: 'int', default: 0 })
  total_order: number;

  @Column({ type: 'int', default: 0 })
  total_order_amount: number;

  @Column({ default: 'silver' })
  rank: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt!: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt!: Date;
}

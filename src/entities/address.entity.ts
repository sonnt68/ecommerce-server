import { Column, Entity, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { CustomerEntity } from './customer.entity';

@Entity('address')
export class AddressEntity {
  @PrimaryGeneratedColumn('increment', { type: 'bigint' })
  id: string;

  @Column({ type: 'character varying' })
  type: string;

  @Column({ type: 'character varying' })
  name: string;

  @Column({ type: 'character varying' })
  info: string;

  @ManyToOne(() => CustomerEntity, customer => customer.addresses)
  customer: CustomerEntity;

  @CreateDateColumn({ name: 'created_at' })
  createdAt!: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt!: Date;
}

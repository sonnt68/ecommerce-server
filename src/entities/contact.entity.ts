import { Column, Entity, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { CustomerEntity } from './customer.entity';

@Entity('contact')
export class ContactEntity {
  @PrimaryGeneratedColumn('increment', { type: 'bigint' })
  id: string;

  @Column({ type: 'character varying' })
  type: string;

  @Column({ type: 'character varying' })
  number: string;

  @ManyToOne(() => CustomerEntity, customer => customer.addresses)
  customer: CustomerEntity;

  @CreateDateColumn({ name: 'created_at' })
  createdAt!: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt!: Date;
}

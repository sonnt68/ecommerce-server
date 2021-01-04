import { Column, Entity, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { CustomerEntity } from './customer.entity';

@Entity('card')
export class CardEntity {
  @PrimaryGeneratedColumn('increment', { type: 'bigint' })
  id: string;

  @Column({ type: 'character varying' })
  type: string;

  @Column({ type: 'character varying' })
  name: string;

  @Column({ type: 'character varying' })
  cardType: string;

  @Column({ type: 'int' })
  lastFourDigit: number;

  @ManyToOne(() => CustomerEntity, customer => customer.addresses)
  customer: CustomerEntity;

  @CreateDateColumn({ name: 'created_at' })
  createdAt!: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt!: Date;
}

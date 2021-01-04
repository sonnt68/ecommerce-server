import { Column, Entity, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { CategoryEntity } from './category.entity';
import { OrderEntity } from './order.entity'

@Entity('order-product')
export class OrderProductEntity {
  @PrimaryGeneratedColumn('increment', { type: 'bigint' })
  id: string;

  @Column({ type: 'character varying' })
  title: string;

  @Column({ type: 'character varying' })
  image: string;

  @Column({ type: 'int', nullable: true })
  price: number;

  @Column({ type: 'int', nullable: true })
  quantity: number;

  @Column({ type: 'character varying' })
  weight: string;

  @ManyToOne(() => OrderEntity, order => order.products)
  order: OrderEntity;

  // @ManyToOne(() => CategoryEntity, category => category.orderProducts)
  // category: CategoryEntity;

  @CreateDateColumn({ name: 'created_at' })
  createdAt!: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt!: Date;
}

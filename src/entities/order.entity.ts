import { OrderStatusEnum } from 'src/modules/order/dto/orderStatusEnum';
import { Column, Entity, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { OrderProductEntity } from './order-product.entity'

@Entity('order')
export class OrderEntity {
  @PrimaryGeneratedColumn('increment', { type : 'bigint'})
  id: string;

  @Column({ type: 'character varying' })
  customer_id: string;
  
  @Column({ type: 'int' })
  amount: number;
    
  @Column({ type: 'character varying' })
  payment_method: string;
    
  @Column({ type: 'character varying' })
  contact_number: string;

  @Column({ type: 'character varying' })
  delivery_address: string;

  @Column({ type: 'character varying' })
  deliveryTime: string;
  
  @Column({ type: 'character varying' })
  status: OrderStatusEnum;

  @Column({ type: 'character varying', nullable: true })
  description: string;

  @Column({ type: 'float', nullable: true })
  discount: number;

  @Column({ type: 'int', nullable: true })
  subtotal: number;

  @Column({ type: 'float' })
  delivery_fee: number;

  @OneToMany(() => OrderProductEntity, product => product.order)
  products: OrderProductEntity[];

  @CreateDateColumn({ name: 'created_at' })
  createdAt!: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt!: Date;
}

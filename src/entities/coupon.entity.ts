import { Column, Entity, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { ProductEntity } from './product.entity'

@Entity('coupon')
export class CouponEntity {
  @PrimaryGeneratedColumn('increment', { type : 'bigint'})
  id: string;

  @Column({ type: 'character varying' })
  title: string;

  @Column({ type: 'int' })
  number_of_coupon: number;
  
  @Column({ type: 'int' })
  number_of_used_coupon: number;
  
  @Column({ type: 'int' })
  discount_in_percent: number;

  @OneToMany(() => ProductEntity, product => product.coupon)
  products: ProductEntity[];

  @Column({ type: 'character varying' })
  code: string;

  @Column({ default: 'active' })
  status: string;

  @Column({ nullable: true })
  expiration_date: Date;

  @CreateDateColumn({ name: 'created_at' })
  createdAt!: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt!: Date;
}

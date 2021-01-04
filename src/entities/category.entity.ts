import { Column, Entity, Tree, TreeChildren, TreeParent, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn, ManyToMany, OneToMany } from 'typeorm';
import { OrderProductEntity } from './order-product.entity';

@Entity('category')
@Tree("materialized-path")
export class CategoryEntity {
  @PrimaryGeneratedColumn('increment', { type: 'bigint' })
  id: string;

  @Column({ type: 'character varying' })
  name: string;

  @Column({ type: 'character varying' })
  type: string;

  @Column({ type: 'character varying', nullable: true })
  icon: string;

  @Column({ type: 'character varying' })
  slug: string;

  @TreeChildren()
  children: CategoryEntity[];

  @TreeParent()
  parent: CategoryEntity;

  // @OneToMany(() => OrderProductEntity, order => order.category)
  // orderProducts: OrderProductEntity;

  @CreateDateColumn({ name: 'created_at' })
  createdAt!: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt!: Date;
}

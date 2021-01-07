import { Column, Entity, ManyToMany, JoinTable, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn, ManyToOne, JoinColumn, RelationId } from 'typeorm';
import { CouponEntity } from './coupon.entity'
import { CategoryEntity } from './category.entity'

export class Gallery {
  url: string;
}

@Entity('product')
export class ProductEntity {
  @PrimaryGeneratedColumn('increment', { type : 'bigint'})
  id: string;

  @Column({ type: 'character varying' })
  name: string;
  
  @Column({ type: 'character varying' })
  image: string;
    
  @Column({ type: 'character varying' })
  type: string;
    
  @Column({ type: 'character varying' })
  unit: string;

  @ManyToMany(() => CategoryEntity)
  @JoinTable()
  categories: CategoryEntity[];

  @Column({ type: 'float' })
  price: number;
  
  @Column({ type: 'float' })
  salePrice: number;
  
  @Column({ type: 'int' })
  discountInPercent: number;

  @Column({ type: 'character varying' })
  description: string;

  @Column({ type: 'character varying' })
  slug: string;

  @ManyToOne(() => CouponEntity)
  coupon: CouponEntity;
  @RelationId((product: ProductEntity) => product.coupon)
  couponId: string;

  @Column('jsonb', { nullable: true })
  gallery: Gallery[];

  @CreateDateColumn({ name: 'created_at' })
  createdAt!: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt!: Date;
}

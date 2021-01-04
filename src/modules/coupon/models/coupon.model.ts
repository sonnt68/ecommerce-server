import { Field, ID, ObjectType, Int } from '@nestjs/graphql';
import { Product } from '../../product/models/product.model';

@ObjectType()
export class Coupon {
  @Field(type => ID)
  id: string;

  @Field()
  title: string;

  @Field(type => Int)
  number_of_coupon: number;

  @Field(type => Int, { defaultValue: 0 })
  number_of_used_coupon?: number;

  @Field(type => Int)
  discount_in_percent: number;

  @Field(type => [Product], { nullable: true })
  products: Product[];

  @Field()
  code: string;

  @Field({ defaultValue: 'active' })
  status: string;

  @Field({ nullable: true })
  expiration_date?: Date;

  @Field()
  createdAt: Date;
}

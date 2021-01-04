import { Field, InputType, ID, Int } from '@nestjs/graphql';
import { Coupon } from '../models/coupon.model';
import { NewProductInput } from '../../product/dto/new-product.input';

@InputType({ description: 'New coupon data' })
export class NewCouponInput implements Partial<Coupon> {
  @Field(type => ID)
  id: string;

  @Field()
  title: string;

  @Field(type => Int)
  number_of_coupon: number;

  @Field(type => Int)
  discount_in_percent: number;

  @Field(type => [NewProductInput], { nullable: true })
  products: NewProductInput[];

  @Field()
  code: string;

  @Field({ defaultValue: 'active' })
  status: string;

  @Field({ nullable: true })
  expiration_date?: Date;
}

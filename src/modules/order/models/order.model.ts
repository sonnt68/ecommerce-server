import { Field, ID, ObjectType, Int, Float } from '@nestjs/graphql';
import { OrderStatusEnum } from '../dto/orderStatusEnum';
import { OrderProduct } from './order_product.models';

@ObjectType()
export class Order {
  @Field(type => ID)
  id: string;

  @Field(type => ID)
  customer_id: string;

  @Field(type => [OrderProduct])
  products: OrderProduct[];

  @Field(type => String)
  status: OrderStatusEnum;

  @Field(type => String)
  deliveryTime: string;

  @Field(type => String)
  amount: number;

  @Field(type => String)
  subtotal: number;

  @Field(type => String)
  discount: number;

  @Field(type => String)
  delivery_fee: number;

  @Field(type => String)
  delivery_address: string;

  @Field(type => String)
  createdAt: Date;
}

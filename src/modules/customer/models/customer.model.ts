import { Field, ObjectType, Int } from '@nestjs/graphql';
import User from '../../user/models/user.models';

@ObjectType()
export class Customer extends User {
  @Field({ defaultValue: false })
  has_blocked: boolean;

  @Field(type => Int, { nullable: true })
  total_order?: number;

  @Field(type => Int, { nullable: true })
  total_order_amount?: number;

  @Field({ defaultValue: 'silver' })
  rank?: string;
}

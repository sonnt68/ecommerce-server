import { Field, ObjectType, Int } from '@nestjs/graphql';
import { Product } from './product.model';

@ObjectType()
export class Products {
  @Field(type => [Product])
  items: Product[];

  @Field(type => Int)
  totalCount: number;

  @Field()
  hasMore: boolean;
}

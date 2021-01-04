import { Field, ID, ObjectType, Int, Float } from '@nestjs/graphql';
import { Category } from '../../category/models/category.model';

@ObjectType()
export class Product {
  @Field(type => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  image: string;

  @Field()
  type: string;

  @Field()
  unit: string;
  
  @Field()
  slug: string;

  @Field(type => [Category])
  categories: Category[];

  @Field(type => Float)
  price: number;

  @Field(type => Float)
  salePrice: number;

  @Field(type => Int)
  discountInPercent: number;

  @Field({ nullable: true })
  description?: string;

  @Field()
  createdAt: Date;
}

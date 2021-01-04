import { Field, InputType, ID, Int, Float } from '@nestjs/graphql';
import { Product } from '../models/product.model';
import { NewCategoryInput } from '../../category/dto/new-category.input';

@InputType({ description: 'New Product Data' })
export class NewProductInput implements Partial<Product> {
  @Field(type => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  slug: string;

  @Field()
  image: string;

  @Field()
  type: string;

  @Field({ defaultValue: '1' })
  unit: string;

  @Field(type => [NewCategoryInput], { nullable: true })
  categories: NewCategoryInput[];

  @Field(type => Int)
  price: number;

  @Field(type => Float, { nullable: true })
  salePrice: number;

  @Field(type => Int, { defaultValue: 0 })
  discountInPercent: number;

  @Field({ nullable: true })
  description?: string;

  @Field()
  createdAt: Date;
}

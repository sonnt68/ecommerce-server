import { Field, InputType, ID } from '@nestjs/graphql';
import { Category } from '../models/category.model';

@InputType({ description: 'New Category Data' })
export class NewCategoryInput implements Partial<Category> {
  @Field(type => ID)
  id: string;

  @Field()
  name: string;

  @Field({ defaultValue: null })
  value: string;

  @Field({ defaultValue: null })
  type: string;

  @Field({ nullable: true })
  icon: string;

  @Field({ nullable: true })
  slug: string;

  @Field(type => [NewCategoryInput])
  children: NewCategoryInput[];
}

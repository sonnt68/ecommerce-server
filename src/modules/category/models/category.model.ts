import { Field, ID, ObjectType } from '@nestjs/graphql';
import { type } from 'os';

@ObjectType()
export class Category {
  @Field(type => ID)
  id: string;

  @Field()
  name: string;

  @Field({ nullable: true })
  type?: string;

  @Field()
  icon: string;

  @Field()
  slug: string;

  @Field(type => [Category])
  children: Category[];
}

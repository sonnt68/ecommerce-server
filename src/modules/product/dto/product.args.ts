import { ArgsType, Field, Int } from '@nestjs/graphql';

@ArgsType()
export class ProductsArgs {
  @Field(type => Int, { defaultValue: 12 })
  limit: number;

  @Field(type => Int, { defaultValue: 0 })
  offset: number;

  @Field({ nullable: true })
  sortByPrice?: string;

  @Field({ nullable: true })
  type?: string;

  @Field({ nullable: true })
  searchText?: string;

  @Field({ nullable: true })
  category?: string;
}

import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class CustomersArgs {
  @Field({ nullable: true })
  searchBy: string;

  @Field({ defaultValue: null })
  sortBy: string;

  @Field({ defaultValue: 7 })
  limit: number;
}

import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class OrdersArgs {
  @Field({ nullable: true })
  status: string;

  @Field({ defaultValue: 50 })
  limit: number;

  @Field({ defaultValue: '' })
  searchText: string;
}

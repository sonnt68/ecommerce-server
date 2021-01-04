import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class CategoriesArgs {
  @Field({ nullable: true })
  type?: string;

  @Field({ nullable: true })
  searchBy?: string;
}

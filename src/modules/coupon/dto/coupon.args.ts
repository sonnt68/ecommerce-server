import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class CouponsArgs {
  @Field({ nullable: true })
  status?: string;

  @Field({ nullable: true })
  searchBy?: string;
}

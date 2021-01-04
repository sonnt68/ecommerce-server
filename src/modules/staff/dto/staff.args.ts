import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class StaffsArgs {
  @Field({ nullable: true })
  role?: string;

  @Field({ nullable: true })
  searchBy?: string;
}

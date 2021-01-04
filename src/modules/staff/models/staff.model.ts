import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Staff {
  @Field(type => ID)
  id: string;

  @Field()
  first_name: string;

  @Field()
  last_name: string;

  @Field()
  contact_number: string;

  @Field()
  email: string;

  @Field()
  role: string;

  @Field()
  createdAt: Date;
}

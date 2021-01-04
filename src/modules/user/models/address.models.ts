import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export default class Address {
  @Field(type => ID)
  id: string;

  @Field()
  type: string;

  @Field()
  name: string;

  @Field()
  info: string;
}

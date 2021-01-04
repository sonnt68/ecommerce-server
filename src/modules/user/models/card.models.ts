import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export default class Card {
  @Field(type => ID)
  id: string;

  @Field()
  type: string;

  @Field()
  name: string;

  @Field()
  cardType: string;

  @Field()
  lastFourDigit: number;
}

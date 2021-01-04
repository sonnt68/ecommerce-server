import { Field, InputType, ID } from '@nestjs/graphql';
import Card from '../models/card.models';
@InputType({ description: 'New recipe data' })
export default class NewCardInput implements Partial<Card> {
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

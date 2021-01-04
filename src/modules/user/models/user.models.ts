import { Field, ID, ObjectType, Int } from '@nestjs/graphql';
import Contact from './contact.models';
import Address from './address.models';
import Card from './card.models';

@ObjectType()
export default class User {
  @Field(type => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  image: string;

  @Field()
  email: string;

  @Field(type => [Address])
  addresses: Address[];

  @Field(type => [Contact])
  contacts: Contact[];

  @Field(type => [Card])
  cards: Card[];

  password: string;

  @Field()
  createdAt: Date;
}

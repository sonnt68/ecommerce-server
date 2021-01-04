import { Field, InputType, ID } from '@nestjs/graphql';
import Contact from '../models/contact.models';
@InputType({ description: 'New recipe data' })
export default class NewContactInput implements Partial<Contact> {
  @Field(type => ID)
  id: string;

  @Field()
  type: string;

  @Field()
  number: string;
}

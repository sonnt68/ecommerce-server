import { Field, InputType, ID } from '@nestjs/graphql';
import Address from '../models/address.models';
@InputType({ description: 'New recipe data' })
export default class NewAddressInput implements Partial<Address> {
  @Field(type => ID)
  id: string;

  @Field()
  type: string;

  @Field()
  title: string;

  @Field()
  location: string;
}

import { Field, InputType, ID } from '@nestjs/graphql';
import { Customer } from '../models/customer.model';
import NewAddressInput from '../../user/dto/new-address.input';
import NewCardInput from '../../user/dto/new-card.input';
import NewContactInput from '../../user/dto/new-contact.input';

@InputType({ description: 'New customer data' })
export class NewCustomerInput implements Partial<Customer> {
  @Field(type => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  image: string;

  @Field()
  email: string;

  @Field(type => [NewAddressInput])
  address: NewAddressInput[];

  @Field(type => [NewContactInput])
  contact: NewContactInput[];

  @Field(type => [NewCardInput])
  card: NewCardInput[];

  password: string;

  @Field()
  creation_date: Date;

  @Field({ defaultValue: false })
  has_blocked: boolean;

  @Field({ defaultValue: 'silver' })
  rank: string;
}

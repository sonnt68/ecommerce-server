import { Field, InputType, ID } from '@nestjs/graphql';
import { Staff } from '../models/staff.model';

@InputType({ description: 'New staff data' })
export class NewStaffInput implements Partial<Staff> {
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

  @Field({ nullable: true })
  name: string;

  @Field()
  creation_date: Date;
}

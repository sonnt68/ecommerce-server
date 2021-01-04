import { NotFoundException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PubSub } from 'apollo-server-express';
import { NewStaffInput } from './dto/new-staff.input'
import { StaffsArgs } from './dto/staff.args';
import { Staff } from './models/staff.model';
import { StaffService } from './staff.service';

const pubSub = new PubSub();

@Resolver(of => Staff)
export class StaffResolver {
  constructor(private readonly staffService: StaffService) { }

  @Query(() => [Staff], { description: 'Get all the Staffs' })
  async staffs(@Args() staffsArgs: StaffsArgs): Promise<Staff[]> {
    return this.staffService.findAll(staffsArgs);
  }

  @Query(returns => Staff)
  async staff(@Args('id') id: string): Promise<Staff | undefined> {
    const staff = await this.staffService.findOneById(id);
    if (!staff) {
      throw new NotFoundException(id);
    }
    return staff;
  }

  @Mutation(() => Staff, { description: 'Create Staff' })
  async createStaff(
    @Args('staff') staff: NewStaffInput
  ): Promise<void> {
    const staffData = await this.staffService.create(staff);
    pubSub.publish('staffAdded', { staffAdded: staffData });
  }
}

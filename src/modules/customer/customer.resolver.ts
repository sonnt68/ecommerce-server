import { NotFoundException } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { CustomersArgs } from './dto/customer.args';
import { Customer } from './models/customer.model';
import { CustomerService } from './customer.service';

@Resolver(of => Customer)
export class CustomerResolver {
  constructor(private readonly customerService: CustomerService) { }

  @Query(() => [Customer])
  async customers(@Args() customersArgs: CustomersArgs): Promise<Customer[] | undefined> {
    return this.customerService.findAll(customersArgs);
  }

  @Query(returns => Customer)
  async customer(@Args('id') id: string): Promise<Customer | undefined> {
    const customer = await this.customerService.findOneById(id);
    if (!customer) {
      throw new NotFoundException(id);
    }
    return customer;
  }
}

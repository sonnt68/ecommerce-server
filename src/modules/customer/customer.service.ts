import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CustomersArgs } from './dto/customer.args';
import { Customer } from './models/customer.model';
// import { NewCustomerInput } from './dto/new-customer.input'
import search from 'src/helpers/search';
import { sortByHighestNumber } from 'src/helpers/sorts';
import { CustomerEntity } from 'src/entities/customer.entity';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(CustomerEntity)
    private customerRepo: Repository<CustomerEntity>,
  ) {}

  // async create(data: NewCustomerInput): Promise<Customer> {
  //   return data;
  // }

  async findOneById(id: string): Promise<Customer> {
    return await this.customerRepo.findOne({
      where: { id: id },
    });
  }

  async findAll({searchBy, sortBy, limit}: CustomersArgs): Promise<Customer[]> {
    // as auth Customer. check from middleware.
    let customers = await this.customerRepo.find();

    if (sortBy === "highestToLowest") {
      customers = await sortByHighestNumber(customers, "total_order_amount");
    }
    if (sortBy === "lowestToHighest") {
      customers = await sortByHighestNumber(customers, "total_order_amount");
    }
    return await search(customers, ["name", "creation_date"], searchBy);
  }

  async remove(id: string): Promise<boolean> {
    return true;
  }
}

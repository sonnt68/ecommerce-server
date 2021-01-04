import { NotFoundException } from '@nestjs/common';
import { Args, Mutation, Query, ResolveProperty, Resolver, Root } from '@nestjs/graphql';
import { PubSub } from 'apollo-server-express';
import { OrdersArgs } from './dto/order.args';
import { Order } from './models/order.model';
import { OrderService } from './order.service';

const pubSub = new PubSub();

@Resolver(of => Order)
export class OrderResolver {
  constructor(private readonly orderService: OrderService) { }

  @Query(() => [Order], { description: 'Get all the Orders' })
  async orders(@Args() ordersArgs: OrdersArgs): Promise<Order[]> {
    return this.orderService.findAll(ordersArgs);
  }

  @Query(returns => Order)
  async order(@Args('id') id: string): Promise<Order | undefined> {
    const order = await this.orderService.findOneById(id);
    if (!order) {
      throw new NotFoundException(id);
    }
    return order;
  }

  @ResolveProperty()
  products(@Root() order: Order) {
    return this.orderService.findOrderProducts(order)
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrdersArgs } from './dto/order.args';
import { Order } from './models/order.model';
import search from 'src/helpers/search';
import { OrderEntity } from 'src/entities/order.entity';
import { OrderProductEntity } from 'src/entities/order-product.entity';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(OrderEntity) private orderRepo: Repository<OrderEntity>,
    @InjectRepository(OrderProductEntity) private orderProductRepo: Repository<OrderProductEntity>,
  ) {}

  async findOneById(id: string): Promise<Order> {
    return await this.orderRepo.findOne({
      where: { id: id },
    });
  }

  async findOrderProducts(order: Order) {
    return this.orderProductRepo.find({
      cache: 1000,
      where: { order: { id: order.id } },
    });
  }

  async findAll({ status, limit, searchText }: OrdersArgs): Promise<Order[]> {
    let orders = await this.orderRepo.find();
    if (status) {
      orders = await orders.filter((order) => order.status === status);
    }
    return await search(orders.slice(0, limit), ['delivery_address'], searchText);
  }

  async remove(id: string): Promise<boolean> {
    return true;
  }
}

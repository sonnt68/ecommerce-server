import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderProductEntity } from 'src/entities/order-product.entity';
import { OrderEntity } from 'src/entities/order.entity';
import { DateScalar } from '../../common/scalars/date.scalar';
import { OrderResolver } from './order.resolver';
import { OrderService } from './order.service';

@Module({
  imports: [TypeOrmModule.forFeature([OrderEntity, OrderProductEntity])],
  providers: [OrderResolver, OrderService, DateScalar],
})
export class OrdersModule {}

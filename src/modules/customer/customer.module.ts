import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerEntity } from 'src/entities/customer.entity';
import { DateScalar } from '../../common/scalars/date.scalar';
import { CustomerResolver } from './customer.resolver';
import { CustomerService } from './customer.service';

@Module({
  imports: [TypeOrmModule.forFeature([CustomerEntity])],
  providers: [CustomerResolver, CustomerService, DateScalar],
})
export class CustomersModule {}

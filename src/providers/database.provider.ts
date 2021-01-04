import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { CategoryEntity } from 'src/entities/category.entity';
import { CouponEntity } from 'src/entities/coupon.entity';
import { ProductEntity } from 'src/entities/product.entity';
import { OrderEntity } from 'src/entities/order.entity';
import { OrderProductEntity } from 'src/entities/order-product.entity';
import { StaffEntity } from 'src/entities/staff.entity';
import { CustomerEntity } from 'src/entities/customer.entity';
import { AddressEntity } from 'src/entities/address.entity';
import { CardEntity } from 'src/entities/card.entity';
import { ContactEntity } from 'src/entities/contact.entity';

export const ENTITY_MODELS = [
  CategoryEntity,
  CouponEntity,
  ProductEntity,
  OrderEntity,
  OrderProductEntity,
  StaffEntity,
  CustomerEntity,
  AddressEntity,
  CardEntity,
  ContactEntity,
];

export async function databaseProviderFactory(configService: ConfigService): Promise<TypeOrmModuleOptions> {  
  return {
    type: 'postgres',
    host: configService.get('DB_HOST'),
    port: configService.get('DB_PORT'),
    username: configService.get('DB_USER'),
    password: configService.get('DB_PASSWORD'),
    database: configService.get('DB_DATABASE'),
    // entities: ['**/entities/*.{.ts,.js}'],
    entities: ENTITY_MODELS,
    synchronize: !!configService.get('DB_SYNC'),
    logging: configService.get('DB_LOGGING'),
  };
}

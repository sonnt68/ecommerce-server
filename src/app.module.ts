import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriesModule } from './modules/category/category.module';
import { CouponsModule } from './modules/coupon/coupon.module';
import { ProductsModule } from './modules/product/product.module';
import { CustomersModule } from './modules/customer/customer.module';
import { OrdersModule } from './modules/order/order.module';
import { StaffsModule } from './modules/staff/staff.module';
import { databaseProviderFactory } from './providers/database.provider';

@Module({
  imports: [
    CategoriesModule,
    CouponsModule,
    ProductsModule,
    CustomersModule,
    OrdersModule,
    StaffsModule,
    GraphQLModule.forRoot({
      installSubscriptionHandlers: true,
      autoSchemaFile: 'schema.gql',
    }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [
        ConfigModule
      ],
      useFactory: databaseProviderFactory,
      inject: [ConfigService],
    }),
  ]
})
export class AppModule {}

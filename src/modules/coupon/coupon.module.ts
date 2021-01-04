import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CouponEntity } from 'src/entities/coupon.entity';
import { ProductEntity } from 'src/entities/product.entity';
import { DateScalar } from '../../common/scalars/date.scalar';
import { CouponResolver } from './coupon.resolver';
import { CouponService } from './coupon.service';

@Module({
  imports: [TypeOrmModule.forFeature([CouponEntity, ProductEntity])],
  providers: [CouponResolver, CouponService, DateScalar],
})
export class CouponsModule {}

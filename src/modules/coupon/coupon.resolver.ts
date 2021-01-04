import { Args, Mutation, Query, Resolver, ResolveProperty, Root } from '@nestjs/graphql';
import { PubSub } from 'apollo-server-express';
import { NewCouponInput } from './dto/new-coupon.input'
import { CouponsArgs } from './dto/coupon.args';
import { Coupon } from './models/coupon.model';
import { CouponService } from './coupon.service';

const pubSub = new PubSub();

@Resolver(of => Coupon)
export class CouponResolver {
  constructor(private readonly couponService: CouponService) { }

  @Query(returns => [Coupon], { description: 'Get All Coupons' })
  async coupons(@Args() couponsArgs: CouponsArgs): Promise<Coupon[]> {
    return this.couponService.findAll(couponsArgs);
  }

  @Mutation(() => Coupon, { description: 'Create Coupon' })
  async createCoupon(
    @Args('coupon') coupon: NewCouponInput
  ): Promise<void> {
    const couponData = await this.couponService.create(coupon);
    pubSub.publish('couponAdded', { couponAdded: couponData });
  }

  @ResolveProperty()
  products(@Root() coupon: Coupon) {
    return this.couponService.findProducts(coupon)
  }
}

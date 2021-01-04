import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CouponsArgs } from './dto/coupon.args';
import { Coupon } from './models/coupon.model';
import { NewCouponInput } from './dto/new-coupon.input'
import search from 'src/helpers/search';
import { CouponEntity } from 'src/entities/coupon.entity';
import { ProductEntity } from 'src/entities/product.entity';

@Injectable()
export class CouponService {
  constructor(
    @InjectRepository(CouponEntity) private couponRepo: Repository<CouponEntity>,
    @InjectRepository(ProductEntity) private productRepo: Repository<ProductEntity>,
  ) {}

  async create(data: NewCouponInput): Promise<void> {
    if (data.id) {
      data.id = data.id;
      this.couponRepo.update(data.id, data);
    } else {
      this.couponRepo.insert(data);
    }
  }

  async findProducts(coupon: Coupon) {
    return this.productRepo.find({
      cache: 1000,
      where: { coupon: { id: coupon.id }}
    })
  }

  async findOneById(id: string): Promise<Coupon> {
    return await this.couponRepo.findOne({
      where: { id: id },
    });
  }

  async findAll({status, searchBy}: CouponsArgs): Promise<Coupon[]> {
    let coupons = await this.couponRepo.find();

    if (status) {
      coupons = coupons.filter(coupon => coupon.status === status);
    }
    return await search(coupons, ['title', 'code'], searchBy);
  }

  async remove(id: string): Promise<boolean> {
    return true;
  }
}

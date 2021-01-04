import { NotFoundException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PubSub } from 'apollo-server-express';
import { NewProductInput } from './dto/new-product.input'
import { ProductsArgs } from './dto/product.args';
import { Product } from './models/product.model';
import { Products } from './models/products.model';
import { ProductService } from './product.service';

const pubSub = new PubSub();

@Resolver(of => Product)
export class ProductResolver {
  constructor(private readonly productService: ProductService) { }

  @Query(returns => Products, { description: 'Get all the products' })
  async products(@Args() productsArgs: ProductsArgs): Promise<Products> {
    return this.productService.findAll(productsArgs);
  }

  @Query(returns => Product)
  async product(@Args('slug') slug: string): Promise<Product | undefined> {
    const product = await this.productService.findOneBySlug(slug);
    if (!product) {
      throw new NotFoundException(slug);
    }
    return product;
  }

  @Mutation(() => Product, { description: 'Create Product' })
  async createProduct(
    @Args('product') product: NewProductInput
  ): Promise<void> {
    const productData = await this.productService.create(product);
    pubSub.publish('productAdded', { productAdded: productData });
  }
}

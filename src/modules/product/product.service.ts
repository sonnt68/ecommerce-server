import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductsArgs } from './dto/product.args';
import { Product } from './models/product.model';
import { NewProductInput } from './dto/new-product.input';
import search from 'src/helpers/search';
import { Products } from './models/products.model';
import { sortByHighestNumber } from 'src/helpers/sorts';
import shuffle from 'src/helpers/shuffle';
import { ProductEntity } from 'src/entities/product.entity';

@Injectable()
export class ProductService {
  constructor(@InjectRepository(ProductEntity) private productRepo: Repository<ProductEntity>) {}

  async create(data: NewProductInput): Promise<void> {
    if (data.id) {
      data.id = data.id;
      this.productRepo.update(data.id, data);
    } else {
      this.productRepo.insert(data);
    }
  }

  async findOneBySlug(slug: string): Promise<Product> {
    return await this.productRepo.findOne({
      where: { slug: slug },
    });
  }

  async findAll({ limit, offset, sortByPrice, type, searchText, category }: ProductsArgs): Promise<Products> {
    const productFound = await this.productRepo.find({ relations: ["categories"] });
    let products = productFound;
    if (category) {
      products = products.filter((product) => product.categories.find((category_item) => category_item.slug === category));
    }
    if (type) {
      products = products.filter((product) => product.type === type);
    }
    if (sortByPrice) {
      if (sortByPrice === 'highestToLowest') {
        products = sortByHighestNumber(products, 'price');
      }
      if (sortByPrice === 'lowestToHighest') {
        products = sortByHighestNumber(products, 'price');
      }
    } else {
      products = shuffle(products);
    }

    // return await products.slice(0, limit);
    products = await search(products, ['name'], searchText);
    const hasMore = products.length > offset + limit;

    return {
      items: products.slice(offset, offset + limit),
      totalCount: productFound.length,
      hasMore,
    };
  }

  async remove(id: string): Promise<boolean> {
    return true;
  }
}

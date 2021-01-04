import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Category } from 'src/modules/category/models/category.model';
import { ProductType } from 'src/modules/product/dto/product.enum';

@ObjectType()
export class OrderProduct {
    @Field(type => ID)
    id: string;
  
    @Field()
    title: string;
  
    @Field()
    image: string;
  
    // @Field(type => [Category])
    // categories: Category[];
  
    @Field()
    price: number;
  
    @Field()
    weight: string;
  
    @Field()
    quantity: number;
  
    // @Field()
    // total: number;
  
    // @Field(type => String)
    // type: ProductType;
}

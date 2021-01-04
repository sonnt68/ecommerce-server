import { NotFoundException } from '@nestjs/common';
import { Args, Mutation, Query, ResolveProperty, Resolver, Root } from '@nestjs/graphql';
import { PubSub } from 'apollo-server-express';
import { NewCategoryInput } from './dto/new-category.input'
import { CategoriesArgs } from './dto/category.args';
import { Category } from './models/category.model';
import { CategoryService } from './category.service';

const pubSub = new PubSub();

@Resolver(of => Category)
export class CategoryResolver {
  constructor(
    private readonly categoryService: CategoryService
  ) { }

  @Query(() => [Category], { description: 'Get all the categories' })
  async categories(@Args() categoriesArgs: CategoriesArgs): Promise<Category[]> {
    return this.categoryService.findAll(categoriesArgs);
  }

  @Query(returns => Category)
  async category(@Args('id') id: string): Promise<Category | undefined> {
    const category = await this.categoryService.findOneById(id);
    if (!category) {
      throw new NotFoundException(id);
    }
    return category;
  }

  @Mutation(() => Category, { description: 'Create Category' })
  async createCategory(
    @Args('newCategoryData') newCategoryData: NewCategoryInput
  ): Promise<void> {
    const category = await this.categoryService.create(newCategoryData);
    pubSub.publish('categoryAdded', { categoryAdded: category });
  }
}

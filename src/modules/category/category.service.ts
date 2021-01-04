import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, TreeRepository } from 'typeorm';
import { CategoriesArgs } from './dto/category.args';
import { Category } from './models/category.model';
import { CategoryEntity } from '../../entities/category.entity';
import { NewCategoryInput } from './dto/new-category.input'
import search from 'src/helpers/search';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(CategoryEntity) private cateRepo: TreeRepository<CategoryEntity>,
    @InjectRepository(CategoryEntity) private treeRepository: TreeRepository<CategoryEntity>,
  ) {}

  async create(data: NewCategoryInput): Promise<void> {
    if (data.id) {
      data.id = data.id;
      this.cateRepo.update(data.id, data);
    } else {
      this.cateRepo.insert(data);
    }
  }

  async findOneById(id: string): Promise<Category> {
    return await this.cateRepo.findOne({
      where: { id: id },
    });
  }

  async findAll({type, searchBy}: CategoriesArgs): Promise<Category[]> {
    let categories = await this.cateRepo.findTrees();
    
    if (type) {
      categories = await categories.filter(category => category.type === type)
    }
    return await search(categories, ['name'], searchBy)
  }

  async remove(id: string): Promise<boolean> {
    return true;
  }
}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryEntity } from 'src/entities/category.entity';
import { DateScalar } from '../../common/scalars/date.scalar';
import { CategoryResolver } from './category.resolver';
import { CategoryService } from './category.service';

@Module({
  imports: [TypeOrmModule.forFeature([CategoryEntity])],
  providers: [CategoryResolver, CategoryService, DateScalar],
})
export class CategoriesModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StaffEntity } from 'src/entities/staff.entity';
import { DateScalar } from '../../common/scalars/date.scalar';
import { StaffResolver } from './staff.resolver';
import { StaffService } from './staff.service';

@Module({
  imports: [TypeOrmModule.forFeature([StaffEntity])],
  providers: [StaffResolver, StaffService, DateScalar],
})
export class StaffsModule {}

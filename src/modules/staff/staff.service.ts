import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StaffsArgs } from './dto/staff.args';
import { Staff } from './models/staff.model';
import { NewStaffInput } from './dto/new-staff.input';
import search from 'src/helpers/search';
import { StaffEntity } from 'src/entities/staff.entity';

@Injectable()
export class StaffService {
  constructor(@InjectRepository(StaffEntity) private staffRepo: Repository<StaffEntity>) {}

  async create(data: NewStaffInput): Promise<void> {
    if (data.id) {
      data.id = data.id;
      this.staffRepo.update(data.id, data);
    } else {
      this.staffRepo.insert(data);
    }
  }

  async findOneById(id: string): Promise<Staff> {
    return await this.staffRepo.findOne({
      where: { id: id },
    });
  }

  async findAll({ role, searchBy }: StaffsArgs): Promise<Staff[]> {
    // as auth Stuff. check from middleware.
    let staffs = await this.staffRepo.find();
    if (role) {
      staffs = staffs.filter((staff) => staff.role.toLowerCase() === role.toLowerCase());
    }
    return await search(staffs, ['name'], searchBy);
  }

  async remove(id: string): Promise<boolean> {
    return true;
  }
}

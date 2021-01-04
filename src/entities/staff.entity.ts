import { Column, Entity, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity('staff')
export class StaffEntity {
  @PrimaryGeneratedColumn('increment', { type: 'bigint' })
  id: string;

  @Column({ type: 'character varying', nullable: true })
  first_name: string;

  @Column({ type: 'character varying' })
  last_name: string;

  @Column({ type: 'character varying' })
  contact_number: string;

  @Column({ type: 'character varying' })
  email: string;

  @Column({ type: 'character varying', default: 'staff' })
  role: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt!: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt!: Date;
}

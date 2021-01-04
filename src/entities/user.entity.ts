import { Column, Entity, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn, OneToMany, BeforeInsert } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn('increment', { type: 'bigint' })
  id: string;

  @Column({ type: 'character varying' })
  name: string;

  @Column({ type: 'character varying' })
  image: string;

  @Column({ type: 'character varying' })
  email: string;

  @Column({ type: 'character varying' })
  password: string;

  @BeforeInsert()
  async setPassword(password: string) {
    const salt = await bcrypt.genSalt()
    this.password = await bcrypt.hash(password || this.password, salt)
  }

  @CreateDateColumn({ name: 'created_at' })
  createdAt!: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt!: Date;
}

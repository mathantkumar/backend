import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Item {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: string;

  @Column()
  amount: string;

  @Column()
  status: string;

  @Column()
  balance: string;
}

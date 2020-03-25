import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Room {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  roomName: string;

  @Column()
  isFree: boolean;

  @Column()
  location: string;
}

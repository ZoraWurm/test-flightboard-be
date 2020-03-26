import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Room } from '../rooms.entity';
import { UpdateResult, DeleteResult } from 'typeorm';

@Injectable()
export class RoomsService {
  constructor(
    @InjectRepository(Room)
    private roomRepository: Repository<Room>,
  ) {}

  async findAll(): Promise<Room[]> {
    return await this.roomRepository.find();
  }

  async findById(id: number): Promise<Room> {
    return this.roomRepository.findOne(id);
  }

  async create(room: Room): Promise<Room> {
    return await this.roomRepository.save(room);
  }

  async update(room: Room): Promise<UpdateResult> {
    return await this.roomRepository.update(room.id, room);
  }

  async delete(id): Promise<DeleteResult> {
    return await this.roomRepository.delete(id);
  }
}

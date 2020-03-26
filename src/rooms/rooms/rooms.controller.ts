import { Controller, Get } from '@nestjs/common';
import { Room } from '../rooms.entity';
import { RoomsService } from './rooms.service';
import { Post, Put, Delete, Body, Param } from '@nestjs/common';

@Controller('rooms')
export class RoomsController {
  constructor(private roomsService: RoomsService) {}
  @Get()
  getAll(): Promise<Room[]> {
    return this.roomsService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id): Promise<Room> {
    return this.roomsService.findById(id);
  }

  @Post('create')
  async create(@Body() contactData: Room): Promise<any> {
    return this.roomsService.create(contactData);
  }

  @Put()
  async update(@Param('id') id, @Body() roomData: Room): Promise<any> {
    roomData.id = Number(id);
    console.log('Update #' + roomData.id);
    return this.roomsService.update(roomData);
  }

  @Delete()
  async delete(@Param('id') id): Promise<any> {
    return this.roomsService.delete(id);
  }
}

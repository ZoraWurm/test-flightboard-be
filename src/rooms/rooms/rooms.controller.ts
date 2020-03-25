import { Controller, Get } from '@nestjs/common';
import { Room } from '../rooms.entity';
import { RoomsService } from './rooms.service';
import { Post, Put, Delete, Body, Param } from '@nestjs/common';

@Controller('rooms')
export class RoomsController {
  constructor(private roomsService: RoomsService) {}
  @Get()
  index(): Promise<Room[]> {
    return this.roomsService.findAll();
  }
  @Post('create')
  async create(@Body() contactData: Room): Promise<any> {
    return this.roomsService.create(contactData);
  }
  @Put(':id/update')
  async update(@Param('id') id, @Body() roomData: Room): Promise<any> {
    roomData.id = Number(id);
    console.log('Update #' + roomData.id);
    return this.roomsService.update(roomData);
  }

  @Delete(':id/delete')
  async delete(@Param('id') id): Promise<any> {
    return this.roomsService.delete(id);
  }
}

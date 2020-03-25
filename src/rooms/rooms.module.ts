import { Module } from '@nestjs/common';
import { RoomsService } from './rooms/rooms.service';
import { RoomsController } from './rooms/rooms.controller';
import { Room } from './rooms.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Room])],
  providers: [RoomsService],
  controllers: [RoomsController],
})
export class RoomsModule {}

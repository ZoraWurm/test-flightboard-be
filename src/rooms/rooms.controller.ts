import { Controller, Get, Param } from '@nestjs/common';

@Controller('rooms')
export class RoomsController {
  private rooms = [
    { id: 1, roomName: 'Grace Hopper', isFree: true, location: 'TH13' },
    { id: 2, roomName: 'Ada Lovelance', isFree: true, location: 'TH13' },
    { id: 3, roomName: 'Kreativlab', isFree: false, location: 'OVAL' },
    { id: 4, roomName: 'Sofazimmer', isFree: true, location: 'MOIN' },
    {
      id: 5,
      roomName: 'Prinzessinenzimmer',
      isFree: false,
      location: 'MOIN',
    },
    { id: 6, roomName: 'Fernsehzimmer', isFree: true, location: 'TH13' },
  ];

  @Get()
  getAll() {
    return this.rooms;
  }

  @Get(':location')
  getByLocation(@Param('location') location: string) {
    // TODO: lowerCase berücksichtigen!!!
    return this.rooms.filter(room => room.location === location);
  }
}

// https://localhost:3000/rooms?location=TH13
// https://localhost:3000/rooms/TH13

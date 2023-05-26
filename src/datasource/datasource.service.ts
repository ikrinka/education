// источник данных (псевдобаза данных)

import { Injectable } from '@nestjs/common';
import { Room } from 'src/rooms/room.entity';
import { Guest } from 'src/guests/guest.entity';
import { Employee } from 'src/employees/employee.entity';
import { IncompleteRoomDto } from 'src/rooms/dto/incomplete-room.dto';
import { IncompleteEmployeeDto } from 'src/employees/dto/incomplete-employee.dto';
import { IncompleteGuestDto } from 'src/guests/dto/incomplete-guest.dto';

@Injectable()
export class DatasourceService {
  // класс, в котором будет храниться пустой массив
  private rooms: Room[] = [];
  private rooms_dto: IncompleteRoomDto[] = [];
  private guests: Guest[] = [];
  private guests_dto: IncompleteGuestDto[] = [];
  private employees: Employee[] = [];
  private employees_dto: IncompleteEmployeeDto[] = [];

  // метод доступа к классу
  getRooms(): Room[] {
    return this.rooms;
  }
  getRoomsDto(): IncompleteRoomDto[] {
    return this.rooms_dto;
  }
  getGuests(): Guest[] {
    return this.guests;
  }
  getGuestsDto(): IncompleteGuestDto[] {
    return this.guests_dto;
  }
  getEmployees(): Employee[] {
    return this.employees;
  }
  getEmployeesDto(): IncompleteEmployeeDto[] {
    return this.employees_dto;
  }
}

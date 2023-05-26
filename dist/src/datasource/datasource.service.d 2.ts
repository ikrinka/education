import { Room } from 'src/rooms/room.entity';
import { Guest } from 'src/guests/guest.entity';
import { Employee } from 'src/employees/employee.entity';
import { IncompleteRoomDto } from 'src/rooms/dto/incomplete-room.dto';
import { IncompleteEmployeeDto } from 'src/employees/dto/incomplete-employee.dto';
import { IncompleteGuestDto } from 'src/guests/dto/incomplete-guest.dto';
export declare class DatasourceService {
    private rooms;
    private rooms_dto;
    private guests;
    private guests_dto;
    private employees;
    private employees_dto;
    getRooms(): Room[];
    getRoomsDto(): IncompleteRoomDto[];
    getGuests(): Guest[];
    getGuestsDto(): IncompleteGuestDto[];
    getEmployees(): Employee[];
    getEmployeesDto(): IncompleteEmployeeDto[];
}

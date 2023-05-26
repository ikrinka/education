import { Employee } from "src/employees/employee.entity";
import { Guest } from "src/guests/guest.entity";
import { Repository } from "typeorm";
import { IncompleteRoomDto } from "./dto/incomplete-room.dto";
import { CreateRoomDto } from "./dto/RoomDTO";
import { Room } from "./room.entity";
export declare class RoomsService {
    private readonly roomRepository;
    private readonly guestRepository;
    private readonly employeeRepository;
    constructor(roomRepository: Repository<Room>, guestRepository: Repository<Guest>, employeeRepository: Repository<Employee>);
    create(roomDto: CreateRoomDto): Promise<Room>;
    findOne(id: number): Promise<Room>;
    findAll(): Promise<Room[]>;
    findIncomplete(): Promise<IncompleteRoomDto[]>;
    update(id: number, updatedRoom: Room): Promise<Room>;
    remove(id: number): void;
}

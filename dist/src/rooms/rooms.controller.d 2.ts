import { RoomsService } from './rooms.service';
import { Room } from './room.entity';
import { CreateRoomDto } from './dto/RoomDTO';
export declare class RoomsController {
    private readonly roomsService;
    constructor(roomsService: RoomsService);
    findAll(): Promise<Room[]>;
    findIncomplete(): void;
    findOne(id: string): Promise<Room>;
    update(id: string, updateRoom: Room): Promise<Room>;
    create(createRoom: CreateRoomDto): Promise<Room>;
    remove(id: string): void;
}

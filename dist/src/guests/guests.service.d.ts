import { Service } from "src/services/service.entity";
import { Room } from "src/rooms/room.entity";
import { Repository } from "typeorm";
import { CreateGuestDto } from "./dto/GuestDTO";
import { IncompleteGuestDto } from "./dto/incomplete-guest.dto";
import { Guest } from "./guest.entity";
export declare class GuestsService {
    private readonly roomRepository;
    private readonly guestRepository;
    private readonly serviceRepository;
    constructor(roomRepository: Repository<Room>, guestRepository: Repository<Guest>, serviceRepository: Repository<Service>);
    create(guestDto: CreateGuestDto): Promise<Guest>;
    findOne(id: number): Promise<Guest>;
    findAll(): Promise<Guest[]>;
    findIncomplete(): Promise<IncompleteGuestDto[]>;
    update(id: number, updatedGuest: Guest): Promise<Guest>;
    remove(id: number): void;
}

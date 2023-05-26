import { GuestsService } from './guests.service';
import { Guest } from './guest.entity';
import { CreateGuestDto } from './dto/GuestDTO';
export declare class GuestsController {
    private readonly guestsService;
    constructor(guestsService: GuestsService);
    findAll(): Promise<Guest[]>;
    findIncomplete(): void;
    findOne(id: string): Promise<Guest>;
    update(id: string, updateGuest: Guest): Promise<Guest>;
    create(createGuest: CreateGuestDto): Promise<Guest>;
    remove(id: string): void;
}

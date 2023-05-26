import { Room } from 'src/rooms/room.entity';
import { Service } from 'src/services/service.entity';
export declare class Guest {
    id: number;
    fullname: string;
    check_in: string;
    check_out: string;
    rooms: Room[];
    services: Service[];
}

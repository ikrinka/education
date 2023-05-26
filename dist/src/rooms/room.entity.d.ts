import { Employee } from 'src/employees/employee.entity';
import { Guest } from 'src/guests/guest.entity';
export declare class Room {
    id: number;
    category: string;
    price: number;
    is_occupied: boolean;
    guests: Guest[];
    employees: Employee[];
}

import { Room } from "src/rooms/room.entity";
import { Repository } from "typeorm";
import { CreateEmployeeDto } from "./dto/EmployeeDTO";
import { IncompleteEmployeeDto } from "./dto/incomplete-employee.dto";
import { Employee } from "./employee.entity";
export declare class EmployeesService {
    private readonly roomRepository;
    private readonly employeeRepository;
    constructor(roomRepository: Repository<Room>, employeeRepository: Repository<Employee>);
    create(employeeDto: CreateEmployeeDto): Promise<Employee>;
    findOne(id: number): Promise<Employee>;
    findAll(): Promise<Employee[]>;
    findIncomplete(): Promise<IncompleteEmployeeDto[]>;
    update(id: number, updatedEmployee: Employee): Promise<Employee>;
    remove(id: number): void;
}

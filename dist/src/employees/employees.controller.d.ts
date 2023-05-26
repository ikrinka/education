import { EmployeesService } from './employees.service';
import { Employee } from './employee.entity';
import { CreateEmployeeDto } from './dto/EmployeeDTO';
export declare class EmployeesController {
    private readonly employeesService;
    constructor(employeesService: EmployeesService);
    findAll(): Promise<Employee[]>;
    findIncomplete(): void;
    findOne(id: string): Promise<Employee>;
    update(id: string, updateEmployee: Employee): Promise<Employee>;
    create(createEmployee: CreateEmployeeDto): Promise<Employee>;
    remove(id: string): void;
}

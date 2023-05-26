// сервис (логика взаимодействия с псевдобазой данных)

import { HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DatasourceService } from "src/datasource/datasource.service";
import { Guest } from "src/guests/guest.entity";
import { Room } from "src/rooms/room.entity";
import { Repository } from "typeorm";
import { CreateEmployeeDto } from "./dto/EmployeeDTO";
import { IncompleteEmployeeDto } from "./dto/incomplete-employee.dto";
import { Employee } from "./employee.entity";

@Injectable()
export class EmployeesService {
    constructor(
        @InjectRepository(Room)
        private readonly roomRepository: Repository<Room>,
        /*@InjectRepository(Guest)
        private readonly guestRepository: Repository<Guest>,*/
        @InjectRepository(Employee)
        private readonly employeeRepository: Repository<Employee>,
      ) {}


    // CRUD(Create, Read, Update, Delete)
    
    // метод добавления гостя
    async create(employeeDto: CreateEmployeeDto): Promise<Employee>{
        const employee = this.employeeRepository.create();
        employee.fullname = employeeDto.fullname;
        employee.position = employeeDto.position;
        employee.salary = employeeDto.salary;
        const rooms = await this.roomRepository.findBy({
        });
        employee.rooms = rooms;
        await this.employeeRepository.save(employee);
        return employee;
    }

    // метод получения гостя по ID
    findOne(id: number): Promise<Employee> {
        return this.employeeRepository.findOne({
          where: { id },
          relations: { rooms: true },
        });
    }
    
    // метод получения всех гостей
    async findAll(): Promise<Employee[]> {
        const employees = await this.employeeRepository.find({
          relations: {
            rooms: true,
          },
        });
        return employees;
    }

    async findIncomplete(): Promise<IncompleteEmployeeDto[]> {
        const employees = await this.employeeRepository.find();
        const incompleteEmployees: IncompleteEmployeeDto[] = employees.map((employee) => {
          const incompleteEmployee = new IncompleteEmployeeDto();
          incompleteEmployee.id = employee.id;
          incompleteEmployee.fullname = employee.fullname;
          return incompleteEmployee;
        });
        return incompleteEmployees;
    }

    // метод изменения гостя
    async update(id: number, updatedEmployee: Employee) {
        const employee = await this.employeeRepository.findOne({ where: { id } });
        employee.fullname = updatedEmployee.fullname;
        employee.position = updatedEmployee.position;
        employee.salary = updatedEmployee.salary;
        employee.rooms = updatedEmployee.rooms;
        await this.employeeRepository.save(employee);
        return employee;
    }
    
    // метод удаления гостя
    remove(id: number) {
        this.employeeRepository.delete({ id });
    }

}

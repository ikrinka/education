"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const room_entity_1 = require("../rooms/room.entity");
const typeorm_2 = require("typeorm");
const incomplete_employee_dto_1 = require("./dto/incomplete-employee.dto");
const employee_entity_1 = require("./employee.entity");
let EmployeesService = class EmployeesService {
    constructor(roomRepository, employeeRepository) {
        this.roomRepository = roomRepository;
        this.employeeRepository = employeeRepository;
    }
    async create(employeeDto) {
        const employee = this.employeeRepository.create();
        employee.fullname = employeeDto.fullname;
        employee.position = employeeDto.position;
        employee.salary = employeeDto.salary;
        const rooms = await this.roomRepository.findBy({});
        employee.rooms = rooms;
        await this.employeeRepository.save(employee);
        return employee;
    }
    findOne(id) {
        return this.employeeRepository.findOne({
            where: { id },
            relations: { rooms: true },
        });
    }
    async findAll() {
        const employees = await this.employeeRepository.find({
            relations: {
                rooms: true,
            },
        });
        return employees;
    }
    async findIncomplete() {
        const employees = await this.employeeRepository.find();
        const incompleteEmployees = employees.map((employee) => {
            const incompleteEmployee = new incomplete_employee_dto_1.IncompleteEmployeeDto();
            incompleteEmployee.id = employee.id;
            incompleteEmployee.fullname = employee.fullname;
            return incompleteEmployee;
        });
        return incompleteEmployees;
    }
    async update(id, updatedEmployee) {
        const employee = await this.employeeRepository.findOne({ where: { id } });
        employee.fullname = updatedEmployee.fullname;
        employee.position = updatedEmployee.position;
        employee.salary = updatedEmployee.salary;
        employee.rooms = updatedEmployee.rooms;
        await this.employeeRepository.save(employee);
        return employee;
    }
    remove(id) {
        this.employeeRepository.delete({ id });
    }
};
EmployeesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(room_entity_1.Room)),
    __param(1, (0, typeorm_1.InjectRepository)(employee_entity_1.Employee)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], EmployeesService);
exports.EmployeesService = EmployeesService;
//# sourceMappingURL=employees.service.js.map
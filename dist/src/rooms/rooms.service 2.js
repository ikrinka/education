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
exports.RoomsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const employee_entity_1 = require("../employees/employee.entity");
const guest_entity_1 = require("../guests/guest.entity");
const typeorm_2 = require("typeorm");
const incomplete_room_dto_1 = require("./dto/incomplete-room.dto");
const room_entity_1 = require("./room.entity");
let RoomsService = class RoomsService {
    constructor(roomRepository, guestRepository, employeeRepository) {
        this.roomRepository = roomRepository;
        this.guestRepository = guestRepository;
        this.employeeRepository = employeeRepository;
    }
    async create(roomDto) {
        const room = this.roomRepository.create();
        room.category = roomDto.category;
        room.price = roomDto.price;
        room.is_occupied = roomDto.is_occupied;
        const employees = await this.employeeRepository.findBy({
            id: (0, typeorm_2.In)(roomDto.employees),
        });
        room.employees = employees;
        await this.roomRepository.save(room);
        return room;
    }
    findOne(id) {
        return this.roomRepository.findOne({
            where: { id },
            relations: { guests: true, employees: true },
        });
    }
    async findAll() {
        const rooms = await this.roomRepository.find({
            relations: {
                guests: true,
                employees: true,
            },
        });
        return rooms;
    }
    async findIncomplete() {
        const rooms = await this.roomRepository.find();
        const incompleteRooms = rooms.map((room) => {
            const incompleteRoom = new incomplete_room_dto_1.IncompleteRoomDto();
            incompleteRoom.id = room.id;
            incompleteRoom.category = room.category;
            incompleteRoom.price = room.price;
            return incompleteRoom;
        });
        return incompleteRooms;
    }
    async update(id, updatedRoom) {
        const room = await this.roomRepository.findOne({ where: { id } });
        room.category = updatedRoom.category;
        room.price = updatedRoom.price;
        room.is_occupied = updatedRoom.is_occupied;
        room.guests = updatedRoom.guests;
        room.employees = updatedRoom.employees;
        await this.roomRepository.save(room);
        return room;
    }
    remove(id) {
        this.roomRepository.delete({ id });
    }
};
RoomsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(room_entity_1.Room)),
    __param(1, (0, typeorm_1.InjectRepository)(guest_entity_1.Guest)),
    __param(2, (0, typeorm_1.InjectRepository)(employee_entity_1.Employee)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], RoomsService);
exports.RoomsService = RoomsService;
//# sourceMappingURL=rooms.service.js.map
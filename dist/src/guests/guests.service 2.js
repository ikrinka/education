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
exports.GuestsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const service_entity_1 = require("../services/service.entity");
const room_entity_1 = require("../rooms/room.entity");
const typeorm_2 = require("typeorm");
const incomplete_guest_dto_1 = require("./dto/incomplete-guest.dto");
const guest_entity_1 = require("./guest.entity");
let GuestsService = class GuestsService {
    constructor(roomRepository, guestRepository, serviceRepository) {
        this.roomRepository = roomRepository;
        this.guestRepository = guestRepository;
        this.serviceRepository = serviceRepository;
    }
    async create(guestDto) {
        const guest = this.guestRepository.create();
        guest.fullname = guestDto.fullname;
        guest.check_in = guestDto.check_in;
        guest.check_out = guestDto.check_out;
        const rooms = await this.roomRepository.findBy({
            id: (0, typeorm_2.In)(guestDto.rooms),
        });
        const services = await this.serviceRepository.findBy({
            id: (0, typeorm_2.In)(guestDto.services),
        });
        guest.rooms = rooms;
        guest.services = services;
        await this.guestRepository.save(guest);
        return guest;
    }
    findOne(id) {
        return this.guestRepository.findOne({
            where: { id },
            relations: { rooms: true, services: true },
        });
    }
    async findAll() {
        const guests = await this.guestRepository.find({
            relations: {
                rooms: true,
                services: true
            },
        });
        return guests;
    }
    async findIncomplete() {
        const guests = await this.guestRepository.find();
        const incompleteGuests = guests.map((guest) => {
            const incompleteGuest = new incomplete_guest_dto_1.IncompleteGuestDto();
            incompleteGuest.id = guest.id;
            incompleteGuest.fullname = guest.fullname;
            return incompleteGuest;
        });
        return incompleteGuests;
    }
    async update(id, updatedGuest) {
        const guest = await this.guestRepository.findOne({ where: { id } });
        guest.fullname = updatedGuest.fullname;
        guest.check_in = updatedGuest.check_in;
        guest.check_out = updatedGuest.check_out;
        guest.rooms = updatedGuest.rooms;
        guest.services = updatedGuest.services;
        await this.guestRepository.save(guest);
        return guest;
    }
    remove(id) {
        this.guestRepository.delete({ id });
    }
};
GuestsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(room_entity_1.Room)),
    __param(1, (0, typeorm_1.InjectRepository)(guest_entity_1.Guest)),
    __param(2, (0, typeorm_1.InjectRepository)(service_entity_1.Service)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], GuestsService);
exports.GuestsService = GuestsService;
//# sourceMappingURL=guests.service.js.map
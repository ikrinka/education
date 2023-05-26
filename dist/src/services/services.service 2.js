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
exports.ServicesService = void 0;
const service_entity_1 = require("./service.entity");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const incomplete_service_dto_1 = require("./dto/incomplete-service.dto");
const guest_entity_1 = require("../guests/guest.entity");
let ServicesService = class ServicesService {
    constructor(serviceRepository, guestRepository) {
        this.serviceRepository = serviceRepository;
        this.guestRepository = guestRepository;
    }
    async create(serviceDto) {
        const service = this.serviceRepository.create();
        service.name = serviceDto.name;
        service.description = serviceDto.description;
        const guests = await this.guestRepository.findBy({
            id: (0, typeorm_2.In)(serviceDto.guests),
        });
        service.guests = guests;
        await this.serviceRepository.save(service);
        return service;
    }
    findOne(id) {
        return this.serviceRepository.findOne({
            where: { id },
            relations: { guests: true },
        });
    }
    async findAll() {
        const services = await this.serviceRepository.find({
            relations: {
                guests: true
            },
        });
        return services;
    }
    async findIncomplete() {
        const services = await this.serviceRepository.find();
        const incompleteServices = services.map((service) => {
            const incompleteService = new incomplete_service_dto_1.IncompleteServiceDto();
            incompleteService.id = service.id;
            incompleteService.name = service.name;
            return incompleteService;
        });
        return incompleteServices;
    }
    async update(id, updatedService) {
        const service = await this.serviceRepository.findOne({ where: { id } });
        service.name = updatedService.name;
        service.description = updatedService.description;
        service.guests = updatedService.guests;
        await this.serviceRepository.save(service);
        return service;
    }
    remove(id) {
        this.serviceRepository.delete({ id });
    }
};
ServicesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(service_entity_1.Service)),
    __param(1, (0, typeorm_1.InjectRepository)(guest_entity_1.Guest)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], ServicesService);
exports.ServicesService = ServicesService;
//# sourceMappingURL=services.service.js.map
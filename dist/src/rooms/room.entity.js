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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Room = void 0;
const swagger_1 = require("@nestjs/swagger");
const employee_entity_1 = require("../employees/employee.entity");
const guest_entity_1 = require("../guests/guest.entity");
const typeorm_1 = require("typeorm");
let Room = class Room {
};
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1', description: 'Уникальный идентификатор' }),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Room.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'президентский люкс', description: 'Категория' }),
    (0, typeorm_1.Column)({}),
    __metadata("design:type", String)
], Room.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Room.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], Room.prototype, "is_occupied", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)((type) => guest_entity_1.Guest, (guest) => guest.rooms),
    (0, typeorm_1.JoinTable)({
        name: 'room_guest',
        joinColumn: { name: 'room_id' },
        inverseJoinColumn: { name: 'guest_id' },
    }),
    __metadata("design:type", Array)
], Room.prototype, "guests", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)((type) => employee_entity_1.Employee, (employee) => employee.rooms),
    (0, typeorm_1.JoinTable)({
        name: 'room_employee',
        joinColumn: { name: 'room_id' },
        inverseJoinColumn: { name: 'employee_id' },
    }),
    __metadata("design:type", Array)
], Room.prototype, "employees", void 0);
Room = __decorate([
    (0, typeorm_1.Entity)('rooms')
], Room);
exports.Room = Room;
//# sourceMappingURL=room.entity.js.map
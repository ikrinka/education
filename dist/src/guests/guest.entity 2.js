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
exports.Guest = void 0;
const room_entity_1 = require("../rooms/room.entity");
const service_entity_1 = require("../services/service.entity");
const typeorm_1 = require("typeorm");
let Guest = class Guest {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Guest.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({}),
    __metadata("design:type", String)
], Guest.prototype, "fullname", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Guest.prototype, "check_in", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Guest.prototype, "check_out", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)((type) => room_entity_1.Room, (room) => room.guests),
    (0, typeorm_1.JoinTable)({
        name: 'room_guest',
        joinColumn: { name: 'guest_id' },
        inverseJoinColumn: { name: 'room_id' },
    }),
    __metadata("design:type", Array)
], Guest.prototype, "rooms", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)((type) => service_entity_1.Service, (service) => service.guests),
    (0, typeorm_1.JoinTable)({
        name: 'service_guest',
        joinColumn: { name: 'guest_id' },
        inverseJoinColumn: { name: 'service_id' },
    }),
    __metadata("design:type", Array)
], Guest.prototype, "services", void 0);
Guest = __decorate([
    (0, typeorm_1.Entity)('guests')
], Guest);
exports.Guest = Guest;
//# sourceMappingURL=guest.entity.js.map
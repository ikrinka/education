"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuestsModule = void 0;
const common_1 = require("@nestjs/common");
const guests_service_1 = require("./guests.service");
const guests_controller_1 = require("./guests.controller");
const datasource_module_1 = require("../datasource/datasource.module");
const typeorm_1 = require("@nestjs/typeorm");
const room_entity_1 = require("../rooms/room.entity");
const service_entity_1 = require("../services/service.entity");
const guest_entity_1 = require("./guest.entity");
let GuestsModule = class GuestsModule {
};
GuestsModule = __decorate([
    (0, common_1.Module)({
        controllers: [guests_controller_1.GuestsController],
        providers: [guests_service_1.GuestsService],
        imports: [datasource_module_1.DatasourceModule, typeorm_1.TypeOrmModule.forFeature([room_entity_1.Room, guest_entity_1.Guest, service_entity_1.Service])],
    })
], GuestsModule);
exports.GuestsModule = GuestsModule;
//# sourceMappingURL=guests.module.js.map
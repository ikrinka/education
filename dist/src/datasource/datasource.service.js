"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatasourceService = void 0;
const common_1 = require("@nestjs/common");
let DatasourceService = class DatasourceService {
    constructor() {
        this.rooms = [];
        this.rooms_dto = [];
        this.guests = [];
        this.guests_dto = [];
        this.employees = [];
        this.employees_dto = [];
    }
    getRooms() {
        return this.rooms;
    }
    getRoomsDto() {
        return this.rooms_dto;
    }
    getGuests() {
        return this.guests;
    }
    getGuestsDto() {
        return this.guests_dto;
    }
    getEmployees() {
        return this.employees;
    }
    getEmployeesDto() {
        return this.employees_dto;
    }
};
DatasourceService = __decorate([
    (0, common_1.Injectable)()
], DatasourceService);
exports.DatasourceService = DatasourceService;
//# sourceMappingURL=datasource.service.js.map
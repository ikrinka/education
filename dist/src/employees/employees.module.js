"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeesModule = void 0;
const common_1 = require("@nestjs/common");
const employees_service_1 = require("./employees.service");
const employees_controller_1 = require("./employees.controller");
const datasource_module_1 = require("../datasource/datasource.module");
const typeorm_1 = require("@nestjs/typeorm");
const room_entity_1 = require("../rooms/room.entity");
const employee_entity_1 = require("./employee.entity");
let EmployeesModule = class EmployeesModule {
};
EmployeesModule = __decorate([
    (0, common_1.Module)({
        controllers: [employees_controller_1.EmployeesController],
        providers: [employees_service_1.EmployeesService],
        imports: [datasource_module_1.DatasourceModule, typeorm_1.TypeOrmModule.forFeature([room_entity_1.Room, employee_entity_1.Employee])],
    })
], EmployeesModule);
exports.EmployeesModule = EmployeesModule;
//# sourceMappingURL=employees.module.js.map
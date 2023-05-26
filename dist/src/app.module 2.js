"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const rooms_module_1 = require("./rooms/rooms.module");
const datasource_module_1 = require("./datasource/datasource.module");
const guests_module_1 = require("./guests/guests.module");
const services_module_1 = require("./services/services.module");
const employees_module_1 = require("./employees/employees.module");
const typeorm_1 = require("@nestjs/typeorm");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            rooms_module_1.RoomsModule,
            guests_module_1.GuestsModule,
            employees_module_1.EmployeesModule,
            services_module_1.ServicesModule,
            datasource_module_1.DatasourceModule,
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                port: 5432,
                username: 'postgres',
                password: 'irinata03',
                host: 'localhost',
                synchronize: false,
                logging: 'all',
                entities: ['dist/**/*.entity{.ts,.js}'],
            })
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
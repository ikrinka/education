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
exports.CreateRoomDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class CreateRoomDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'президентский люкс', description: 'Категория' }),
    __metadata("design:type", String)
], CreateRoomDto.prototype, "category", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '3500 р./ночь', description: 'Цена' }),
    __metadata("design:type", Number)
], CreateRoomDto.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: false, description: 'Занятость' }),
    __metadata("design:type", Boolean)
], CreateRoomDto.prototype, "is_occupied", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: [1],
        description: 'Список идентификаторов гостей',
    }),
    __metadata("design:type", Array)
], CreateRoomDto.prototype, "guests", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: [1, 2],
        description: 'Список идентификаторов работников',
    }),
    __metadata("design:type", Array)
], CreateRoomDto.prototype, "employees", void 0);
exports.CreateRoomDto = CreateRoomDto;
//# sourceMappingURL=RoomDTO.js.map
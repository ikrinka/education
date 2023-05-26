// контроллер (обработка начального запроса в зависимости от типа)

import { RoomsService } from './rooms.service';
import { Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import { Room } from './room.entity';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateRoomDto } from './dto/RoomDTO';


@Controller('rooms')
@ApiTags('Комнаты')
export class RoomsController {
  constructor(private readonly roomsService: RoomsService) {}
  
  // Get запрос (запросить данные от сервера по пути контроллера)
  @Get()
  findAll() {
    return this.roomsService.findAll();
  }
  @Get('incomplete')
  findIncomplete() {
    this.roomsService.findIncomplete();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.roomsService.findOne(+id);
  }

  // PUT запрос (сервер применит новые значения для автора, если найдёт его
  // в источнике данных и вернет обновленный экземпляр сущности)
  @Put(':id')
  update(@Param('id') id: string, @Body() updateRoom: Room) {
    return this.roomsService.update(+id, updateRoom);
  }

  // POST запрос (сервер добавит в источник данных новый экземпляр сущности)
  @ApiOperation({ summary: 'Создание комнаты' }) 
  @Post()
  create(@Body() createRoom: CreateRoomDto) {
    return this.roomsService.create(createRoom);
  }

  // DELETE запрос (сервер удалит компонент с указанным в запросе ID, если такой будет в источнике данных)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.roomsService.remove(+id);
  }
}

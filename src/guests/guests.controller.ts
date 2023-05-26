// контроллер (обработка начального запроса в зависимости от типа)

import { GuestsService } from './guests.service';
import { Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import { Guest } from './guest.entity';
import { CreateGuestDto } from './dto/GuestDTO';


@Controller('guests')
export class GuestsController {
  constructor(private readonly guestsService: GuestsService) {}
  
  @Get()
  findAll() {
    return this.guestsService.findAll();
  }
  @Get('incomplete')
  findIncomplete() {
    this.guestsService.findIncomplete();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.guestsService.findOne(+id);
  }
  @Put(':id')
  update(@Param('id') id: string, @Body() updateGuest: Guest) {
    return this.guestsService.update(+id, updateGuest);
  }
  @Post()
  create(@Body() createGuest: CreateGuestDto) {
    return this.guestsService.create(createGuest);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.guestsService.remove(+id);
  }
}

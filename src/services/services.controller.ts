import { Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';
import { ServicesService } from './services.service';
import { Service } from './service.entity';
import { CreateServiceDto } from './dto/ServiceDTO';

@Controller('services')
export class ServicesController {
  constructor(private readonly servicesService: ServicesService) {}

  @Get()
  findAll() {
    return this.servicesService.findAll();
  }
  @Get('incomplete')
  findIncomplete() {
    this.servicesService.findIncomplete();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.servicesService.findOne(+id);
  }
  @Post()
  create(@Body() createService: CreateServiceDto) {
    return this.servicesService.create(createService);
  }
  @Put(':id')
  update(@Param('id') id: string, @Body() service: Service) {
    return this.servicesService.update(+id, service);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.servicesService.remove(+id);
  }
}

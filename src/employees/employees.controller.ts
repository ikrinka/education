// контроллер (обработка начального запроса в зависимости от типа)

import { EmployeesService } from './employees.service';
import { Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import { Employee } from './employee.entity';
import { CreateEmployeeDto } from './dto/EmployeeDTO';


@Controller('employees')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}
  
  // Get запрос (запросить данные от сервера по пути контроллера)
  @Get()
  findAll() {
    return this.employeesService.findAll();
  }
  @Get('incomplete')
  findIncomplete() {
    this.employeesService.findIncomplete();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.employeesService.findOne(+id);
  }

  // PUT запрос (сервер применит новые значения для автора, если найдёт его
  // в источнике данных и вернет обновленный экземпляр сущности)
  @Put(':id')
  update(@Param('id') id: string, @Body() updateEmployee: Employee) {
    return this.employeesService.update(+id, updateEmployee);
  }

  // POST запрос (сервер добавит в источник данных новый экземпляр сущности)
  @Post()
  create(@Body() createEmployee: CreateEmployeeDto) {
    return this.employeesService.create(createEmployee);
  }

  // DELETE запрос (сервер удалит компонент с указанным в запросе ID, если такой будет в источнике данных)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.employeesService.remove(+id);
  }
}

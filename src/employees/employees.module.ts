// отвечает за управление всеми компонентами в рамках сущности (модель, контроллер и сервис)

import { Module } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { EmployeesController } from './employees.controller';
import { DatasourceModule } from 'src/datasource/datasource.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Room } from 'src/rooms/room.entity';
import { Employee } from './employee.entity';

@Module({
  controllers: [EmployeesController],
  providers: [EmployeesService],
  imports: [DatasourceModule, TypeOrmModule.forFeature([Room, Employee])],
})
export class EmployeesModule {}

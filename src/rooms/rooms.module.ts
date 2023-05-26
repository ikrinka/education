// отвечает за управление всеми компонентами в рамках сущности (модель, контроллер и сервис)

import { Module } from '@nestjs/common';
import { RoomsService } from './rooms.service';
import { RoomsController } from './rooms.controller';
import { DatasourceModule } from 'src/datasource/datasource.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from 'src/employees/employee.entity';
import { Guest } from 'src/guests/guest.entity';
import { Room } from './room.entity';

@Module({
  controllers: [RoomsController],
  providers: [RoomsService],
  imports: [DatasourceModule, TypeOrmModule.forFeature([Room, Guest, Employee])],
})
export class RoomsModule {}

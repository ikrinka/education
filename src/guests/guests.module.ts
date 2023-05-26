// отвечает за управление всеми компонентами в рамках сущности (модель, контроллер и сервис)

import { Module } from '@nestjs/common';
import { GuestsService } from './guests.service';
import { GuestsController } from './guests.controller';
import { DatasourceModule } from 'src/datasource/datasource.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Room } from 'src/rooms/room.entity';
import { Service } from 'src/services/service.entity';
import { Guest } from './guest.entity';

@Module({
  controllers: [GuestsController],
  providers: [GuestsService],
  imports: [DatasourceModule, TypeOrmModule.forFeature([Room, Guest, Service])],
})
export class GuestsModule {}

import { Module } from '@nestjs/common';
import { ServicesController } from './services.controller';
import { ServicesService } from './services.service';
import { DatasourceModule } from 'src/datasource/datasource.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Service } from './service.entity';
import { Guest } from 'src/guests/guest.entity';

@Module({
  controllers: [ServicesController],
  providers: [ServicesService],
  imports: [DatasourceModule, TypeOrmModule.forFeature([Service, Guest])],
})
export class ServicesModule {}

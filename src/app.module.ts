import { Module } from '@nestjs/common';
import { RoomsModule } from './rooms/rooms.module';
import { DatasourceModule } from './datasource/datasource.module';
import { GuestsModule } from './guests/guests.module';
import { ServicesModule } from './services/services.module';
import { EmployeesModule } from './employees/employees.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    RoomsModule, 
    GuestsModule, 
    EmployeesModule,
    ServicesModule,
    DatasourceModule,
    TypeOrmModule.forRoot({
      type: 'postgres', //тип подключаемой БД
      port: 5432, //порт
      username: 'postgres', //имя пользователя
      password: 'irinata03', //пароль
      host: 'localhost', //хост, в нашем случае БД развернута локально
      synchronize: false, //отключаем автосинхронизацию(в противном случае при каждом перезапуске наша БД будет создаваться заново)
      logging: 'all', //включим логирование для удобства отслеживания процессов
	    entities: ['dist/**/*.entity{.ts,.js}'], //указываем путь к сущностям
    })
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

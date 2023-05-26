import { ApiProperty } from '@nestjs/swagger';
import { Employee } from 'src/employees/employee.entity';
import { Guest } from 'src/guests/guest.entity';
import {
    Column,
    Entity,
    JoinTable,
    ManyToMany,
    PrimaryGeneratedColumn,
  } from 'typeorm';
  
@Entity('rooms') //указываем что это не просто клаcс, а сущность в рамках TypeOrm, в БД будет храниться как таблица
export class Room {
  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @PrimaryGeneratedColumn() //колонка - идентификатор, значение генерируется автоматически
  id: number;
  @ApiProperty({ example: 'президентский люкс', description: 'Категория' })
  @Column({}) //колонка таблицы, сюда можно добавить большое количество параметров для БД, например тип, уникальность, триггер и т.д.
  category: string;
  @Column()
  price: number;
  @Column()
  is_occupied: boolean;

  @ManyToMany((type) => Guest, (guest) => guest.rooms)
  @JoinTable({
    name: 'room_guest',
    joinColumn: { name: 'room_id' },
    inverseJoinColumn: { name: 'guest_id' },
  })
  guests: Guest[]; //объект, в котором будем автоматически получать всех гостей номера

  @ManyToMany((type) => Employee, (employee) => employee.rooms)
  @JoinTable({
    name: 'room_employee',
    joinColumn: { name: 'room_id' },
    inverseJoinColumn: { name: 'employee_id' },
  })
  employees: Employee[];

}  
import { Room } from 'src/rooms/room.entity';
import {
    Column,
    Entity,
    JoinTable,
    ManyToMany,
    PrimaryGeneratedColumn,
  } from 'typeorm';
  
@Entity('employees') //указываем что это не просто клаcс, а сущность в рамках TypeOrm, в БД будет храниться как таблица
export class Employee {
  @PrimaryGeneratedColumn() //колонка - идентификатор, значение генерируется автоматически
  id: number;
  @Column({}) //колонка таблицы, сюда можно добавить большое количество параметров для БД, например тип, уникальность, триггер и т.д.
  fullname: string;
  @Column()
  position: string;
  @Column()
  salary: number;

  @ManyToMany((type) => Room, (room) => room.employees)
  @JoinTable({
    name: 'room_guest',
    joinColumn: { name: 'employee_id' },
    inverseJoinColumn: { name: 'room_id' },
  })
  rooms: Room[];
}
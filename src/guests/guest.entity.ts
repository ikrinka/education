import { Room } from 'src/rooms/room.entity';
import { Service } from 'src/services/service.entity';
import {
    Column,
    Entity,
    JoinTable,
    ManyToMany,
    PrimaryGeneratedColumn,
  } from 'typeorm';
  
@Entity('guests')
export class Guest {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({})
  fullname: string;
  @Column()
  check_in: string;
  @Column()
  check_out: string;

  @ManyToMany((type) => Room, (room) => room.guests)
  @JoinTable({
    name: 'room_guest',
    joinColumn: { name: 'guest_id' },
    inverseJoinColumn: { name: 'room_id' },
  })
  rooms: Room[];

  @ManyToMany((type) => Service, (service) => service.guests)
  @JoinTable({
    name: 'service_guest',
    joinColumn: { name: 'guest_id' },
    inverseJoinColumn: { name: 'service_id' },
  })
  services: Service[];
}  
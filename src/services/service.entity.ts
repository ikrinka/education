import { Guest } from 'src/guests/guest.entity';
import {
    Column,
    Entity,
    JoinTable,
    ManyToMany,
    PrimaryGeneratedColumn,
  } from 'typeorm';

@Entity('services')
export class Service {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  description: string;

  @ManyToMany((type) => Guest, (guest) => guest.services)
  @JoinTable({
    name: 'guest_service',
    joinColumn: { name: 'service_id' },
    inverseJoinColumn: { name: 'guest_id' },
  })
  guests: Guest[];
}

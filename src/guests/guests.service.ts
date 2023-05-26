// сервис (логика взаимодействия с псевдобазой данных)

import { HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DatasourceService } from "src/datasource/datasource.service";
import { Service } from "src/services/service.entity";
import { Room } from "src/rooms/room.entity";
import { In, Repository } from "typeorm";
import { CreateGuestDto } from "./dto/GuestDTO";
import { IncompleteGuestDto } from "./dto/incomplete-guest.dto";
import { Guest } from "./guest.entity";

@Injectable()
export class GuestsService {
    constructor(
        @InjectRepository(Room)
        private readonly roomRepository: Repository<Room>,
        @InjectRepository(Guest)
        private readonly guestRepository: Repository<Guest>,
        @InjectRepository(Service)
        private readonly serviceRepository: Repository<Service>,
      ) {}

    // CRUD(Create, Read, Update, Delete)
    
    // метод добавления гостя
    async create(guestDto: CreateGuestDto): Promise<Guest>{
        const guest = this.guestRepository.create();
        guest.fullname = guestDto.fullname;
        guest.check_in = guestDto.check_in;
        guest.check_out = guestDto.check_out;
        const rooms = await this.roomRepository.findBy({
        id: In(guestDto.rooms),
        });
        const services = await this.serviceRepository.findBy({
        id: In(guestDto.services),
        });
        guest.rooms = rooms;
        guest.services = services;
        await this.guestRepository.save(guest);
        return guest;
    }

    // метод получения гостя по ID
    findOne(id: number): Promise<Guest> {
        return this.guestRepository.findOne({
          where: { id },
          relations: { rooms: true, services: true },
        });
    }
    
    // метод получения всех гостей
    async findAll(): Promise<Guest[]> {
        const guests = await this.guestRepository.find({
          relations: {
            rooms: true,
            services: true
          },
        });
        return guests;
    }

    async findIncomplete(): Promise<IncompleteGuestDto[]> {
        const guests = await this.guestRepository.find();
        const incompleteGuests: IncompleteGuestDto[] = guests.map((guest) => {
          const incompleteGuest = new IncompleteGuestDto();
          incompleteGuest.id = guest.id;
          incompleteGuest.fullname = guest.fullname;
          return incompleteGuest;
        });
        return incompleteGuests;
    }

    // метод изменения гостя
    async update(id: number, updatedGuest: Guest) {
        const guest = await this.guestRepository.findOne({ where: { id } });
        guest.fullname = updatedGuest.fullname;
        guest.check_in = updatedGuest.check_in;
        guest.check_out = updatedGuest.check_out;
        guest.rooms = updatedGuest.rooms;
        guest.services = updatedGuest.services;
        await this.guestRepository.save(guest);
        return guest;
    }
    
    // метод удаления гостя
    remove(id: number) {
        this.guestRepository.delete({ id });
    } 

}

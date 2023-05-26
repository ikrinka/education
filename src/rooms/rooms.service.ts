// сервис (логика взаимодействия с базой данных)

import { HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DatasourceService } from "src/datasource/datasource.service";
import { Employee } from "src/employees/employee.entity";
import { Guest } from "src/guests/guest.entity";
import { In, Repository } from "typeorm";
import { IncompleteRoomDto } from "./dto/incomplete-room.dto";
import { CreateRoomDto } from "./dto/RoomDTO";
import { Room } from "./room.entity";

@Injectable()
export class RoomsService {
    constructor(
        @InjectRepository(Room)
        private readonly roomRepository: Repository<Room>, // "внедряем" репозиторий Room в сервис
        @InjectRepository(Guest)
        private readonly guestRepository: Repository<Guest>,
        @InjectRepository(Employee)
        private readonly employeeRepository: Repository<Employee>,
      ) {}


    // CRUD(Create, Read, Update, Delete)
    
    // метод добавления комнаты
    async create(roomDto: CreateRoomDto): Promise<Room>{
        //получаем объект CreateRoomDto
        const room = this.roomRepository.create(); //создаем объект Room из репозитория
        room.category = roomDto.category; //заполняем поля объекта Room
        room.price = roomDto.price;
        room.is_occupied = roomDto.is_occupied;
        const employees = await this.employeeRepository.findBy({
        //получаем массив Employee по id
        id: In(roomDto.employees),
        });
        room.employees = employees;
        await this.roomRepository.save(room); //сохраняем объект Room в БД
        return room; //возвращаем объект Room
    }


    // метод получения комнаты по ID
    findOne(id: number): Promise<Room> {
        // Promise<Room> - указывает, что функция возвращает объект room в виде Promise (c асинхронного потока)
        return this.roomRepository.findOne({
          where: { id }, //указываем условие поиска по id
          relations: { guests: true, employees: true }, //получаем связанные объекты
        });
    }
    
    
    // метод получения всех комнат
    async findAll(): Promise<Room[]> {
        const rooms = await this.roomRepository.find({
          //получаем связанные объекты
          relations: {
            guests: true,
            employees: true,
          },
        });
        return rooms;
    }


    async findIncomplete(): Promise<IncompleteRoomDto[]> {
        const rooms = await this.roomRepository.find(); //получаем массив Room из БД
        const incompleteRooms: IncompleteRoomDto[] = rooms.map((room) => {
          //преобразуем массив Room в массив IncompleteRoomDto
          const incompleteRoom = new IncompleteRoomDto();
          incompleteRoom.id = room.id;
          incompleteRoom.category = room.category;
          incompleteRoom.price = room.price;
          return incompleteRoom;
        });
        return incompleteRooms;
    }
    

    // метод изменения комнаты
    async update(id: number, updatedRoom: Room) {
        //получаем объект Room для обновления по id
        const room = await this.roomRepository.findOne({ where: { id } }); //получаем объект Room по id из БД
        room.category = updatedRoom.category; //обновляем поля объекта Room
        room.price = updatedRoom.price;
        room.is_occupied = updatedRoom.is_occupied;
        room.guests = updatedRoom.guests;
        room.employees = updatedRoom.employees;
        await this.roomRepository.save(room); //сохраняем объект Room в БД
        return room;
    }
    
    
    // метод удаления комнаты
    remove(id: number) {
        this.roomRepository.delete({ id });
    }    

}

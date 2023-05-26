import { Service } from './service.entity';
import { HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DatasourceService } from "src/datasource/datasource.service";
import { In, Repository } from "typeorm";
import { CreateServiceDto } from "./dto/ServiceDTO";
import { IncompleteServiceDto } from "./dto/incomplete-service.dto";
import { Guest } from "src/guests/guest.entity";

@Injectable()
export class ServicesService {
    constructor(
        @InjectRepository(Service)
        private readonly serviceRepository: Repository<Service>,
        @InjectRepository(Guest)
        private readonly guestRepository: Repository<Guest>,
      ) {}
      
      async create(serviceDto: CreateServiceDto): Promise<Service>{
        const service = this.serviceRepository.create();
        service.name = serviceDto.name;
        service.description = serviceDto.description;
        const guests = await this.guestRepository.findBy({
        id: In(serviceDto.guests),
        });
        service.guests = guests;
        await this.serviceRepository.save(service);
        return service;
    }

    findOne(id: number): Promise<Service> {
        return this.serviceRepository.findOne({
          where: { id },
          relations: { guests: true },
        });
    }
    
    // метод получения всех гостей
    async findAll(): Promise<Service[]> {
        const services = await this.serviceRepository.find({
          relations: {
            guests: true
          },
        });
        return services;
    }

    async findIncomplete(): Promise<IncompleteServiceDto[]> {
        const services = await this.serviceRepository.find();
        const incompleteServices: IncompleteServiceDto[] = services.map((service) => {
          const incompleteService = new IncompleteServiceDto();
          incompleteService.id = service.id;
          incompleteService.name = service.name;
          return incompleteService;
        });
        return incompleteServices;
    }

    async update(id: number, updatedService: Service) {
        const service = await this.serviceRepository.findOne({ where: { id } });
        service.name = updatedService.name;
        service.description = updatedService.description;
        service.guests = updatedService.guests;
        await this.serviceRepository.save(service);
        return service;
    }
    
    remove(id: number) {
        this.serviceRepository.delete({ id });
    } 
}

import { Service } from './service.entity';
import { Repository } from "typeorm";
import { CreateServiceDto } from "./dto/ServiceDTO";
import { IncompleteServiceDto } from "./dto/incomplete-service.dto";
import { Guest } from "src/guests/guest.entity";
export declare class ServicesService {
    private readonly serviceRepository;
    private readonly guestRepository;
    constructor(serviceRepository: Repository<Service>, guestRepository: Repository<Guest>);
    create(serviceDto: CreateServiceDto): Promise<Service>;
    findOne(id: number): Promise<Service>;
    findAll(): Promise<Service[]>;
    findIncomplete(): Promise<IncompleteServiceDto[]>;
    update(id: number, updatedService: Service): Promise<Service>;
    remove(id: number): void;
}

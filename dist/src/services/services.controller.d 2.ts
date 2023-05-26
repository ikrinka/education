import { ServicesService } from './services.service';
import { Service } from './service.entity';
import { CreateServiceDto } from './dto/ServiceDTO';
export declare class ServicesController {
    private readonly servicesService;
    constructor(servicesService: ServicesService);
    findAll(): Promise<Service[]>;
    findIncomplete(): void;
    findOne(id: string): Promise<Service>;
    create(createService: CreateServiceDto): Promise<Service>;
    update(id: string, service: Service): Promise<Service>;
    remove(id: string): void;
}

import { ApiProperty } from "@nestjs/swagger";

export class CreateRoomDto {
    @ApiProperty({ example: 'президентский люкс', description: 'Категория' })
    category: string;
    @ApiProperty({ example: '3500 р./ночь', description: 'Цена' })
    price: number;
    @ApiProperty({ example: false, description: 'Занятость' })
    is_occupied: boolean;
    @ApiProperty({
      example: [1],
      description: 'Список идентификаторов гостей',
    })  
    guests: number[];
    @ApiProperty({
      example: [1, 2],
      description: 'Список идентификаторов работников',
    })  
    employees: number[];
  }

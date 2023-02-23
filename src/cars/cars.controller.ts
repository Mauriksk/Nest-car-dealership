import { Controller, Get, Param } from '@nestjs/common';

@Controller('cars')
export class CarsController {
    

    @Get()
    get(){
        return this.cars
    }

    @Get(':id')
    getCarById( @Param('id') id: string) {
        return {
            id,
            car: this.cars[+id]
        }
    }
}



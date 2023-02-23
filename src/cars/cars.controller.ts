import { Controller, Get, Param } from '@nestjs/common';
import { ParseIntPipe } from '@nestjs/common/pipes';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
    
    constructor(
        private readonly carsService: CarsService
    ){}

    @Get()
    get(){
        return this.carsService.findAll()
    }

    @Get(':id')
    getCarById( @Param('id', ParseIntPipe) id: number) {
        return this.carsService.findOneById(id)
    }
}



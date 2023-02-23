import { Injectable } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common/exceptions';

@Injectable()
export class CarsService {
  private cars = [
    { id: 1, brand: 'Toyota' },
    { id: 2, brand: 'Honda' },
    { id: 3, brand: 'Jeep' },
  ];

  findAll() {
    return this.cars;
  }

  findOneById(id: number) {
    const car = this.cars.find((car) => car.id === id);
    if(!car) throw new NotFoundException(`Car with id '${id}' not found`);
    return car;
  }
}

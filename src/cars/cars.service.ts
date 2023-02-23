import { Injectable } from '@nestjs/common';

@Injectable()
export class CarsService {
  private cars = [
    { id: 1, brand: 'Toyota' },
    { id: 2, brand: 'Honda' },
    { id: 3, brand: 'Jeep' },
  ];
}

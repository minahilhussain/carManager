import { Controller, Get, Param } from '@nestjs/common';
import { CarService } from './car.service';

@Controller('car')
export class CarController {
  constructor(private carService: CarService) {}

  @Get()
  async getCars() {
    return this.carService.getAllCars();
  }
  @Get(':id')
  async getOneCar(@Param('id') uuid: string) {
    return this.carService.getCarById(uuid);
  }
}

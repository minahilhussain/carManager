import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateCarDTO } from 'src/dto/car.dto';
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
  @Post()
  async postCar(@Body() request: CreateCarDTO) {
    this.carService.postCar(request);
  }
}

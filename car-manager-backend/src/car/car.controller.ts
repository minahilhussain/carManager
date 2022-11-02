import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateCarDTO, UpdateCarDTO } from 'src/dto/car.dto';
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
    return this.carService.postCar(request);
  }
  @Delete(':id')
  async deleteCar(@Param('id') uuid: string) {
    return this.carService.deleteCarById(uuid);
  }
  @Put(':id')
  async updateCar(@Param('id') uuid: string, @Body() request: UpdateCarDTO) {
    return this.carService.putCarById(uuid, request);
  }
}

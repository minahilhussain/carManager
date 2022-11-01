import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Car } from 'src/entity/Car';
import { Repository } from 'typeorm';

@Injectable()
export class CarService {
  constructor(
    @InjectRepository(Car)
    private carsRepository: Repository<Car>,
  ) {}

  public async getAllCars(): Promise<Car[]> {
    return this.carsRepository.find();
  }

  public async getCarById(uuid: string): Promise<Car> {
    const car = this.carsRepository.findOneBy({ uuid });
    if (!car) throw new Error('Car not found');
    return car;
  }

  public async deleteCarById(uuid: string): Promise<void> {
    await this.carsRepository.delete(uuid);
  }

  public async postCar(car: Partial<Car>): Promise<Car> {
    return this.carsRepository.save(car);
  }

  public async putCarById(car: Car) {
    const myCar = await this.getCarById(car.uuid);
    if (!myCar) throw new Error('Car not found');
    myCar.name = car.name;
    myCar.model = car.model;
    myCar.color = car.color;
    return this.carsRepository.save(myCar);
  }
}

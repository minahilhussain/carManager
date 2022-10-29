import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarModule } from './car/car.module';
import { Car } from './entity/Car';

@Module({
  // imports: [CarModule],
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5433,
      username: 'postgres',
      password: 'postgres',
      database: 'Cars',
      entities: [Car],
      synchronize: true,
    }),
    CarModule,
  ],
})
export class AppModule {}

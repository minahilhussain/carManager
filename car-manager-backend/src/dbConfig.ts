import { TypeOrmModule } from '@nestjs/typeorm';
import { Car } from './entity/Car';

export const dbConfig = TypeOrmModule.forRoot({
  type: 'postgres',
  host: 'localhost',
  port: 5433,
  username: 'postgres',
  password: 'postgres',
  database: 'Cars',
  entities: [Car],
  synchronize: true,
});

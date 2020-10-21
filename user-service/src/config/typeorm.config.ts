import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from '../user/user.entity';

export const TypeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'task-management',
  synchronize: true,
  entities: [User],
};

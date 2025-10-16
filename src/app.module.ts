import { Module } from '@nestjs/common';
import { TodoModule } from './todo/todo.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todoentity } from 'src/entity/entity';

@Module({
  imports: [TodoModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'uchena1064',
      database: 'todo',
      entities: [Todoentity],
      synchronize: true,
})
  ],
})
export class AppModule {}

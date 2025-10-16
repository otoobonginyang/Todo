import { Module } from '@nestjs/common';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todoentity } from 'src/entity/entity';

@Module({
  imports:[TypeOrmModule.forFeature([Todoentity])],
  controllers: [TodoController],
  providers: [TodoService]
})
export class TodoModule {}


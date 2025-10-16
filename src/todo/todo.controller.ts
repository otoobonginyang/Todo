import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TodoService } from './todo.service';
import { Tododto } from '../dto/tododto';
import { UpdateTodoDto } from 'src/dto/updateTododto';




@Controller('todo')
export class TodoController {
constructor( private readonly TodoService:TodoService) {}




@Post('createTodo')
async create(@Body() Todo:Tododto){
    return this.TodoService.createTodo(Todo)
}

@Get()
async get(){
return await this.TodoService.findAll()
}

@Get(':id')
async findid(@Param('id') id: number){
return await this.TodoService.findbyId(id)
}
          

@Put(':id')
async Update(@Param('id') id:number,
 @Body()updatedtodo:UpdateTodoDto
){
return await this.TodoService.update(id,updatedtodo)
}


@Delete(':id')
async Delete(@Param('id') id:number){
return await this.TodoService.Delete(id)
}


}
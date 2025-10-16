import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { Tododto } from '../dto/tododto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todoentity } from 'src/entity/entity';
import { UpdateTodoDto } from 'src/dto/updateTododto';


@Injectable ()
export class TodoService{
constructor (@InjectRepository (Todoentity)
private todoRepository : Repository<Todoentity>){}

async createTodo (newTodo:Tododto){
const todo = await this.todoRepository.save(newTodo)
return newTodo
}

async findAll(){
 const find = await this.todoRepository.find()
 return {find, message:'All todos fetched successfully'}
}

async findbyId(id:number){
const find = await this.todoRepository.findOneBy({id});
if (!find) {
    throw new NotFoundException ('Item not in the list')
}
return find
}


async update(id:number,updatedTodo:UpdateTodoDto){
const todotoupdate = await this.todoRepository.findOne({where:{id:id}})
if (!todotoupdate){
    throw new NotFoundException('Item not found')
}

Object.assign(todotoupdate,updatedTodo)

const update = await this.todoRepository.save(todotoupdate)
return {update, message:'Updated successfully'}
}


async Delete(id:number){
const Delete = await this.todoRepository.delete(id)
if (!Delete){
    throw new NotFoundException ('not deleted ')
}
 return {message:'Deleted successfully'}


 
}
}
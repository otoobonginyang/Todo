import { CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";



    @Entity()
    export class Base{

    @PrimaryGeneratedColumn()
    id: number

    @CreateDateColumn()
    date: Date
    todo: any;


}
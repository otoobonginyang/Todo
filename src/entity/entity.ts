import { Column, Entity, JoinColumn, ManyToOne } from "typeorm"
import { Base } from "./base.entity";



@Entity()
export class Todoentity extends Base{

@ Column ()
  title: string;

@ Column ()
  category: string;

@Column ()
  priority: string;

  @ManyToOne (() => Base, (user) => user.todo)
  @JoinColumn ({ name: "userid"}) //explicitly name co
  user: Base;
  
}

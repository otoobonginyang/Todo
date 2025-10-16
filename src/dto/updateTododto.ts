import { PartialType } from "@nestjs/mapped-types";
import { Tododto } from "./tododto";


export class UpdateTodoDto extends PartialType(Tododto) {}
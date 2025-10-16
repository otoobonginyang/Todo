import { IsNotEmpty, IsNumber, IsString } from "class-validator";


export class Tododto{

@IsNotEmpty()
@IsString()
title :string;



@IsNotEmpty()
@IsString()
category: string;

@IsNotEmpty()
@IsString()
priority : string;




}
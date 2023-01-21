import { IsNotEmpty, IsNumber, IsOptional, IsString} from "class-validator";

export class updateBookDto{
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    title?:string;  

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    description?:string;

    @IsOptional()
    @IsNumber()
    @IsNotEmpty()
    owner?:number;
}
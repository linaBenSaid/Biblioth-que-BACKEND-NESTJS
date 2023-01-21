import { IsNotEmpty, IsNumber, IsString} from "class-validator";

export class createBookDto{
    @IsString()
    @IsNotEmpty()
    title:string;

    @IsString()
    @IsNotEmpty()
    description:string;

    @IsNumber()
    @IsNotEmpty()
    owner:number;
}
import { Book } from "src/book/entities/book.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User{ 
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
     firstName:string;
     
     @Column()
     lastName:string
     
     @Column()
     birthdate:Date;
     
     @OneToMany(()=> Book,(book) =>book.owner)  //many to many
     books:Book[] | number[];
    }
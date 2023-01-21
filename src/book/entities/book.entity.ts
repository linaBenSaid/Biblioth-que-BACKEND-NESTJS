import { User } from "src/user/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Book{ 
    @PrimaryGeneratedColumn()
    id:number;
  
    @Column()
     title:string;
    
     @Column()
     description:string

    @ManyToOne(() => User, (user)=> user.books)
    owner:User | number;

    }
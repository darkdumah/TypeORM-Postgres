import { Entity, BaseEntity, Column, PrimaryColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { Person } from "./utils/person";

@Entity('banker')
export class Banker extends Person {

    @Column({
        unique: true,
        length: 10
    })
    employee_number: string

    @Column({
        unique: true,
        length: 10
    })
    card_number: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
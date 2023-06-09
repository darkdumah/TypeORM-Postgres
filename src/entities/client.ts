import { Entity, BaseEntity, Column, PrimaryColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { Person } from "./utils/person";

@Entity('client')
export class Client extends Person {

    @Column({
        default: true,
        name: "active"
    })
    is_active: boolean

    @Column({
        type: "simple-json",
        nullable: true
    })
    additional_info: {
        age: number,
        gender: string
    }

    @Column({
        type: 'simple-array',
        default: []
    })
    family_members: string[];

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
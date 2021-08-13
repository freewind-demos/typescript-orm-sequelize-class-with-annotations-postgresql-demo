import {Column, HasMany, Model, PrimaryKey, Table} from "sequelize-typescript";
import {Profile} from "./Profile";

@Table
export class User extends Model {
    @PrimaryKey
    @Column({primaryKey: true, autoIncrement: true})
    id: number;
    @Column
    firstName: string
    @Column
    lastName: string
    @Column
    age: number
    @HasMany(() => Profile)
    profiles: Profile[];
}


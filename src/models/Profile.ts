import {BelongsTo, Column, ForeignKey, Model, Table} from "sequelize-typescript";
import {User} from "./User";

@Table
export class Profile extends Model {
    @Column({primaryKey: true, autoIncrement: true})
    id: number;
    @Column
    gender: string;
    @Column
    photo: string;
    @ForeignKey(() => User)
    userId: number
    @BelongsTo(() => User)
    user: User
}

import {Sequelize} from "sequelize-typescript";
import {Profile} from "./models/Profile";
import {User} from "./models/User";

export const sequelize = new Sequelize('postgres://demo:1234567@localhost:5432/typescript-orm-sequelize-class-with-annotations-postgresql-demo', {
    models: [User, Profile]
})


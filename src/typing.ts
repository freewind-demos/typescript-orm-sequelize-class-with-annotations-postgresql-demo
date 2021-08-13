import {Model} from "sequelize/types/lib/model";

export type UserShape = Model & {
    id: number;
    firstName: string,
    lastName: string
    age: number
    addProfile: (profile: ProfileShape) => void
    getProfiles: () => ProfileShape[]
}

export type ProfileShape = Model & {
    id: number;
    gender: string;
    photo: string;
    setUser: (user: UserShape) => void
    getUser: () => UserShape
}

import {DataTypes} from "sequelize";
import {sequelize} from "./connectToDb";
import {ProfileShape} from "./typing";
import {User} from "./User";

export const Profile = sequelize.define<ProfileShape>('Profile', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    gender: {
        type: DataTypes.STRING,
        allowNull: false
    },
    photo: {
        type: DataTypes.STRING
        // allowNull 默认为 true
    },
})

// Can't declare it here
// Profile.belongsTo(User);

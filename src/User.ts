import {DataTypes} from "sequelize";
import {sequelize} from "./connectToDb";
import {UserShape} from "./typing";
import {Profile} from "./Profile";

export const User = sequelize.define<UserShape>('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING
        // allowNull 默认为 true
    },
    age: {
        type: DataTypes.INTEGER,
    }
}, {
    // 这是其他模型参数
});

// Can't declare it here
// User.hasMany(Profile);

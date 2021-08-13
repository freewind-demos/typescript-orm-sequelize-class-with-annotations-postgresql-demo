import "reflect-metadata";
import {User} from "./models/User";
import {Profile} from "./models/Profile";
import {sequelize} from "./connectToDb";

async function main() {

    console.log('### rebuildDatabase');
    await sequelize.sync({force: true});

    console.log("Inserting a new user with profiles into the database...");

    const user = new User();
    user.firstName = "Timber";
    user.lastName = "Saw";
    user.age = 25;
    await user.save();

    const profile = new Profile()
    profile.gender = "male";
    profile.photo = "me.jpg";
    await profile.save();

    // Note: this is not actually type-safe
    await user.$add('profile', profile);

    // Note: following are not working
    // profile.user = user;
    // user.profiles = [profile];
    await user.save();

    const users = await User.findAll({include: Profile});
    console.log("### users", JSON.stringify(users, null, 4));

    await sequelize.close();
}

main()

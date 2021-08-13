import "reflect-metadata";
import {User} from "./User";
import {Profile} from "./Profile";
import {sequelize} from "./connectToDb";

function specifyRelations() {
    User.hasMany(Profile);
    Profile.belongsTo(User);

}

async function main() {
    // have to specify relation here not in their own files,
    // otherwise we will get compilation errors
    await specifyRelations();

    console.log('### rebuildDatabase');
    await sequelize.sync({force: true});

    console.log("Inserting a new user with profiles into the database...");

    const user = await User.create({
        firstName: "Timber",
        lastName: "Saw",
        age: 25,
    })

    const profile = await Profile.create({
        gender: "male",
        photo: "me.jpg"
    });

    user.addProfile(profile);
    await user.save();

    const users = await User.findAll({include: Profile});
    console.log("### users", JSON.stringify(users, null, 4));

    await sequelize.close();
}

main()

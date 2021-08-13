TypeScript Orm Sequelize Class with Annotation Postgresql Demo
==================================

Note: 
1. When using `sequelize-typescript`, there are many same names with `sequelize`. Please use ones
from `sequelize-typescript`, e.g. `Model`, otherwise you will get all kinds of strange type errors
2. Don't forget to include models when creating `new Sequelize('...', {models: [User, Profile]})`


```
brew install postgresql
psql postgres
```

```
create user "demo";
create database "typescript-orm-sequelize-class-with-annotations-postgresql-demo";
alter user "demo" with encrypted password '123456';
grant all privileges on database "typescript-orm-sequelize-class-with-annotations-postgresql-demo" to "demo";
```

Steps to run this project:

1. Run `npm i` command
2. Run `npm start` command

TypeScript Orm Sequelize Postgresql Demo
==================================

Note: We have to define models first, and then set their relations together, otherwise we may get following errors:

```
sequelize@6.6.5_pg@8.5.1/node_modules/sequelize/lib/associations/mixin.js:93
      throw new Error(`${source.name}.${_.lowerFirst(Type.name)} called with something that's not a subclass of Sequelize.Model`);
```

```
brew install postgresql
psql postgres
```

```
create user "demo";
create database "typescript-orm-sequelize-postgresql-demo";
alter user "demo" with encrypted password '123456';
grant all privileges on database "typescript-orm-sequelize-postgresql-demo" to "demo";
```

Steps to run this project:

1. Run `npm i` command
2. Run `npm start` command

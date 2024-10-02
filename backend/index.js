/**
 * DB Diagram : https://dbdiagram.io/d/ShopAppNodeJSReactJS-66fcbca4fb079c7ebd08d360
 * 
 * npx sequelize-cli init
 * npx sequelize-cli model:generate --name User --attributes email:string,password:string,name:string,role:integer,avater:string,phone:string
 * npx sequelize-cli model:generate --name Category --attributes name:string,image:string
 * npx sequelize-cli model:generate --name Banner --attributes name:string,image:string,status:integer
 * npx sequelize-cli model:generate --name Brand --attributes name:string,image:string
 * 
 * Run migrations:
 * npx sequelize-cli db:migrate
 * 
 * Revert the most recent migration:
 * npx sequelize-cli db:migrate:undo
 * npx sequelize-cli db:migrate:undo:all
 */
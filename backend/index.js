/**
 * DB Diagram : https://dbdiagram.io/d/ShopAppNodeJSReactJS-66fcbca4fb079c7ebd08d360
 * 
 * npx sequelize-cli init
 * npx sequelize-cli model:generate --name User --attributes email:string,password:string,name:string,role:integer,avater:string,phone:string
 * npx sequelize-cli model:generate --name Category --attributes name:string,image:string
 * npx sequelize-cli model:generate --name Banner --attributes name:string,image:string,status:integer
 * npx sequelize-cli model:generate --name Brand --attributes name:string,image:string
 * 
 * npx sequelize-cli model:generate --name Order --attributes user_id:integer,status:integer,note:string,total:integer
 * npx sequelize-cli model:generate --name Product --attributes name:string,image:string,price:integer,oldprice:integer,description:string,specification:string,buyturn:integer,quantity:integer,brand_id:integer,category_id:integer
 * npx sequelize-cli model:generate --name OrderDetail --attributes order_id:integer,product_id:integer,price:integer,quantity:integer
 * npx sequelize-cli model:generate --name New --attributes title:string,image:string,content:string
 * npx sequelize-cli model:generate --name NewDetail --attributes product_id:integer,new_id:integer
 * npx sequelize-cli model:generate --name BannerDetail --attributes product_id:integer,banner_id:integer
 * npx sequelize-cli model:generate --name Feedback --attributes product_id:integer,user_id:integer,star:integer,content:string
 * 
 * Run migrations:
 * npx sequelize-cli db:migrate
 * 
 * Revert the most recent migration:
 * npx sequelize-cli db:migrate:undo
 * npx sequelize-cli db:migrate:undo:all
 * 
 * npm add express: thư viện backend express
 * npm add dotenv nodemon : nodemon : thay đổi đến đâu thì app thay đổi đến đấy
 * npm add --dev @babel/core @babel/node @babel/preset-env
 */

// const express = require('express')
import express from 'express'
import dotenv from 'dotenv'

// require('dotenv').config()
dotenv.config()

const app = express()

app.get("/", (req, res) => {
    res.send("ahha")
})

app.listen(process.env.PORT, () => {

})
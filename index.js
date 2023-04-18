import express from 'express'
import mysql from 'mysql'
import dotenv from 'dotenv'
import usersRouter from "./router/users.router.js";

dotenv.config()
const app = express();

export const db = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
},)
app.use(express.json())

app.use("/users",usersRouter)

app.listen(process.env.PORT, () => {
    console.log("Connected to the backend")
})

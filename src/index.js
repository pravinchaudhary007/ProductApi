import express from 'express'
import dotenv from 'dotenv'
import database from './DB/database.js'
import Router from './Routes/ProductRoute.js'

dotenv.config()
const app = express();
const Port = process.env.PORT


app.use('/api',Router);

const Server = async()=>{
     try {
        await database();
        app.listen(Port,()=>{
            console.log(`⚙ Server is running at Port ${Port}`);
        })
     } catch (error) {
        console.log(error.massage);
     }
}

Server();
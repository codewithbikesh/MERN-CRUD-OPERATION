import express from 'express'
import dbCon from './utlis/db.js';
import dotenv from 'dotenv';
import cors from 'cors';
import routers from './routes/routes.js';
dotenv.config()
const app = express()

//  mongodb
dbCon()
app.use(express.json())
app.use(cors())
app.use('/api',routers)
app.listen(process.env.PORT, () => {
    console.log("Server is running");
})
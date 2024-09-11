const express = require("express");
const app = express();
const dotenv = require("dotenv");
const path = require("path");
dotenv.config({path:path.join(__dirname,'config','config.env')});

const todoGets = require('./routes/todoGet');
const todoCreates = require('./routes/todoCreate');
const todoUpdates = require('./routes/todoUpdate');

app.use(express.json());

app.use('/api/v1/',todoGets);
app.use('/api/v2/',todoCreates);
app.use('api/v3/',todoUpdates);

app.listen(process.env.PORT,()=>{
    console.log(`Server is running on Port ${process.env.PORT} in ${process.env.NODE_ENV}`)
})
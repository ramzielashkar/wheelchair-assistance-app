const express = require('express');
const app = express();
app.use(express.json());
require('./config/db.config');
require('dotenv').config();
const cors = require ('cors');

app.use(cors());

app.listen(process.env.PORT, (err)=>{
    if(err) throw err;
    console.log(`server running on port ${process.env.PORT}`);
})
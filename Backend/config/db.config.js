const mongoose = require("mongoose");
require('dotenv').config();

mongoose.connect(process.env.DATABASE_URL)
.then(()=>{
    console.log("database connected")
})
.catch(err=>{
    console.log("database error: ", err)
})



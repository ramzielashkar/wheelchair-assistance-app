const express = require('express');
const app = express();
app.use(express.json());
require('./config/db.config');
require('dotenv').config();
const cors = require ('cors');

app.use(cors());
app.use('/public',express.static('public'));


const clientRoutes = require('./routes/client.routes');
app.use('/client', clientRoutes)

const adminRoutes = require('./routes/admin.routes');
app.use('/admin', adminRoutes)

app.listen(process.env.PORT, (err)=>{
    if(err) throw err;
    console.log(`server running on port ${process.env.PORT}`);
})
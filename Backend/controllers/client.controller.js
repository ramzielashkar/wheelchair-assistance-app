const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Client = require('../models/client.model');
const fs = require("fs");
const { now } = require('mongoose');


// function to register client
const register = async (req, res) =>{
    const {name, email, password, geo_location, location} = req.body;
    try{
        const user = new Client();
        user.name = name;
        user.email = email;
        user.password = await bcrypt.hash(password, 10);
        user.geo_location = geo_location;
        user.location = location;

        await user.save();
        const token = jwt.sign({email: user.email, name: user.name}, process.env.JWT_SECRET_KEY, {
        });
        res.json({
            "user": user,
            "token" : token
        })
    }catch(err){
        res.status(400).json({
            message: err.message
        })
    }
}

//function to update profile picture
const updateprofilepic = async (req, res)=>{
    const id = req.user.id;
    const matches = req.body.image.match(/^data:([A-Za-z-+/]+);base64,(.+)$/);
    const response ={};
    response.type = matches[1];
    response.data = new Buffer(matches[2], 'base64');
    const decodedImg = response;
    const imageBuffer = decodedImg.data;
    const type = decodedImg.type;
    const date = new Date();
    const seconds = date.getSeconds();
    const fileName = `${id+ seconds}.png`;
    
    fs.writeFileSync("./public/" + fileName, imageBuffer, 'utf8');
        try {
        const user = await Client.findByIdAndUpdate(id,{
            profile_picture: fileName
        })
        const updated = await Client.findById(id);
        await res.json({updated});
    } catch (error) {
        res.status(400).json({
            message: error.message,
        })
    }
}

module.exports= {
    register,
    updateprofilepic
}


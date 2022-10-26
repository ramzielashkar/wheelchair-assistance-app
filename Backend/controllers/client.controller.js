const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Client = require('../models/client.model');

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

module.exports= {
    register
}


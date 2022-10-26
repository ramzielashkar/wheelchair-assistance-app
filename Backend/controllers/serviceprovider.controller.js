const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Client = require('../models/client.model');
const Admin = require('../models/admin.model');
const Seller = require('../models/serviceprovider.model');
const fs = require("fs");
const { now } = require('mongoose');
const emailValidator = require('email-validator');
const passwordSchema = require('../validators/password.validator');

//function to login
const login = async (req, res)=>{
    const {email, password} = req.body;
    
    const user = await Seller.findOne({email}).select("+password");

    if(!user) return res.status(404).json({message: "Invalid Credentials"});
    if(user.active==false) return res.status(404).json({message:"User Banned"})
    
    if(!user.password==password) return res.status(404).json({message: "Invalid Credentials"});
    const token = jwt.sign({email: user.email, name: user.name}, process.env.JWT_SECRET_KEY, {
        expiresIn: '1h'
    });
    res.status(200).json({
        'user': user, 
        'token':token
    })
}

module.exports = {
    login,
}
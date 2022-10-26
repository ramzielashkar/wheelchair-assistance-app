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
    
    const user = await Admin.findOne({email}).select("+password");

    if(!user) return res.status(404).json({message: "Invalid Credentials"});
    
    if(!user.password==password) return res.status(404).json({message: "Invalid Credentials"});
    const token = jwt.sign({email: user.email, name: user.name}, process.env.JWT_SECRET_KEY, {
        expiresIn: '1h'
    });
    res.status(200).json({
        'user': user, 
        'token':token
    })
}

// function to add service provider
const addUser = async (req, res) =>{
    const {name, email, password} = req.body;

    if(!emailValidator.validate(email)){
        res.status(400).json({
            message: "Invalid email structure"
        })
    }else{
        if(!passwordSchema.validate(password)){
            res.status(400).json({
                message: "Password must have minimum 8 chars, lowercase and uppercase letters and at least 2 digits"
            })
        }else{
    
    try{
        const user = new Seller();
        user.name = name;
        user.email = email;
        user.password = await bcrypt.hash(password, 10);

        await user.save();
        
        res.json({
            "user": user,
        })
    }catch(err){
        res.status(400).json({
            message: err.message
        })
    }
}
}
}

//function to get service providers
const getServiceProviders = async (req, res)=>{
    const service_providers = await Seller.find({active:true});
    if(!service_providers) return res.json({message: "No Service Providers Found"});
    res.json({service_providers});
}

//function to get banned service providers
const getBannedServiceProviders = async (req, res)=>{
    const service_providers = await Seller.find({active:false});
    if(!service_providers) return res.json({message: "No Service Providers Found"});
    res.json({service_providers});
}




module.exports= {
    addUser,
    login,
    getServiceProviders,
    getBannedServiceProviders
}


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
    const {name, email, password, type, location, geo_location} = req.body;

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
        user.type = type;
        user.geo_location = geo_location;
        user.location=location;

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

// function to ban/unban service providers
const toggleActiveSellers = async (req, res)=>{
    const {id} = req.params;
    const seller = await Seller.findById(id).select('active');
    const user = await Seller.findByIdAndUpdate(id,{
        active : !seller.active
    })
    res.json({user})
}

// function to get number of service providers

const getUsersCount = async (req, res)=>{
    const service_providers = await Seller.find({active:true}).count();
    const clients = await Client.find({active:true}).count();
    res.json({
        "service_providers":service_providers,
        "clients": clients
    })
}

//function to get clients
const getActiveClients = async (req, res)=>{
    const clients = await Client.find({active:true});
    if(!clients) return res.json({message: "No Clients Found"});
    res.json({clients});
}

//function to get banned clients
const getBannedClients = async (req, res)=>{
    const clients = await Client.find({active:false});
    if(!clients) return res.json({message: "No Clients Found"});
    res.json({clients});
}

// function to ban/unban client
const toggleActiveClient = async (req, res)=>{
    const {id} = req.params;
    const client = await Client.findById(id).select('active');
    const user = await Client.findByIdAndUpdate(id,{
        active : !client.active
    })
    res.json({user})
}



module.exports= {
    addUser,
    login,
    getServiceProviders,
    getBannedServiceProviders,
    toggleActiveSellers,
    getUsersCount,
    getActiveClients,
    getBannedClients,
    toggleActiveClient
}


const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Client = require('../models/client.model');
const fs = require("fs");
const { now } = require('mongoose');
const emailValidator = require('email-validator');
const passwordSchema = require('../validators/password.validator');
const Seller = require('../models/serviceprovider.model');
const { stringify } = require('querystring');

// function to register client
const register = async (req, res) =>{
    const {name, email, password, geo_location, location} = req.body;

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
        await res.json({
            "user":updated});
    } catch (error) {
        res.status(400).json({
            message: error.message,
        })
    }
}

//function to edit profile
const editProfile = async (req, res)=>{
    const id = req.user.id;
    const {name, geo_location, location} = req.body;
    try{
        const user = await Client.findByIdAndUpdate(id,{
            name,
            geo_location,
            location
        })
        const updated = await Client.findById(id);
        await res.json({
            "user":updated});
    } catch(error){
        res.status(400).json({
            message: error.message,
        })
    }
    
}

//function to get service providers
const getServiceProviders = async (req, res)=>{
    const id = req.user.id;
    const {type} = req.params;
    const result = await Client.findById(id).select("geo_location").select("coordinates");
    console.log(result.geo_location.coordinates)
   const options={
        geo_location:
            { $near: { $geometry: { type: "Point", coordinates: result.geo_location.coordinates}, $maxDistance: 1000*1609.34 }
        }
    }
   const sellers = await Seller.find(options).where({type})


res.status(200).json({
    'user': sellers, 
})

}

//function to get service provider by id
const getServiceProvider = async (req, res) =>{
    const {_id} = req.params;
    const seller = await Seller.findOne({_id});
    res.json({seller});
}

//function to follow service provider
const follow = async (req,res) =>{
    const id = req.user.id;
    const {seller_id} = req.params;
    const following_id = {
        following_id: seller_id
    }
    const follower_id = {
        follower_id : id
    }
    Seller.findById(seller_id, (error, result)=>{
        try {
            result.followers.push(follower_id);
            result.save();
        } catch (error) {
            res.status(400).send(error.message);
        } 
    })
    Client.findById(id, (error, client)=>{
        try {
            client.following.push(following_id);
            client.save();
            res.json(client);
        } catch (error) {
            res.status(400).send(error.message);
        } 
    })
} 

//function to follow service provider
const unFollow = async (req,res) =>{
    const id = req.user.id;
    const {follow_id} = req.params;
    console.log(id);
    console.log(follow_id)
    
    try{
        const followed = await Seller.findByIdAndUpdate(follow_id, 
            {$pull:
                {
                "followers":
                    {"follower_id": id}
            }
        });
        const following = await Client.findOneAndUpdate(id, 
            {$pull:
                {
                "following":
                    {"following_id": follow_id}
            }
        });
        const updated = await Client.findById(id);
        res.json({updated})
        }catch(error){
            res.status(400).json({
                message: error.message,
            })
        }
} 

//function to get followed service providers
const getFollowed = async (req,res)=>{
    const id = req.user.id;
    const followed = await Client.findById(id).select('following').populate('following.following_id');
    res.json({followed})
}   

//function to search for service providers 
const search = async (req, res)=>{
    const {service} = req.params;
    const result = await Seller.find({ "name": { "$regex": service, "$options": "i" } });
    res.json({result});
}

module.exports= {
    register,
    updateprofilepic,
    editProfile,
    getServiceProviders,
    getServiceProvider,
    follow,
    unFollow,
    getFollowed,
    search
}


const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Client = require('../models/client.model');
const Admin = require('../models/admin.model');
const Seller = require('../models/serviceprovider.model');
const fs = require("fs");
const { now } = require('mongoose');
const emailValidator = require('email-validator');
const passwordSchema = require('../validators/password.validator');


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
        const user = await Seller.findByIdAndUpdate(id,{
            profile_picture: fileName
        })
        const updated = await Seller.findById(id);
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
    const {name, geo_location, location, description, working_hours, phone_number} = req.body;
    try{
        const user = await Seller.findByIdAndUpdate(id,{
            name,
            geo_location,
            location,
            description,
            working_hours,
            phone_number
        })
        const updated = await Seller.findById(id);
        await res.json({
            "user":updated});
    } catch(error){
        res.status(400).json({
            message: error.message,
        })
    }
    
}

//function to add picture
const addPicture = async (req, res)=>{
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
    const picture = {
        picture : fileName
    }
    Seller.findById(id, (error, result)=>{
        try {
            result.pictures.push(picture);
            result.save();
            res.json(result);
        } catch (error) {
            res.status(400).send(error.message);
        } 
    })

}

//function to get pictures
const getPictures = async (req, res)=>{
    const id = req.user.id;
    const pictures = await Seller.findById(id).select('pictures');
    if(!pictures) return res.status(404).json({message:"No Pictures Found"})
    res.json({
        pictures
    })
} 

//function to delete picture
const deletePicture = async (req, res)=>{
    const id = req.user.id;
    const {picture_id} = req.params; 
    console.log(id)   
    try{
    const seller = await Seller.findOneAndUpdate(id, 
        {$pull:
            {
            "pictures":
                {"_id": picture_id}
        }
    });
    const updated =await Seller.findById(id);
    res.json({updated})
    }catch(error){
        res.status(400).json({
            message: error.message,
        })
    }
    
}

//function to get followers
const getFollowers = async (req,res)=>{
    const id = req.user.id;
    const followers = await Seller.findById(id).select('followers').populate('followers.follower_id');
    res.json({followers});
}

module.exports = {
    updateprofilepic,
    editProfile,
    addPicture,
    getPictures,
    deletePicture,
    getFollowers
}
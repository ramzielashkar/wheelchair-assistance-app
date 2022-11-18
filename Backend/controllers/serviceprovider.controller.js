const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Client = require('../models/client.model');
const Admin = require('../models/admin.model');
const Seller = require('../models/serviceprovider.model');
const fs = require("fs");
const { now } = require('mongoose');
const emailValidator = require('email-validator');
const passwordSchema = require('../validators/password.validator');
const { Expo } = require('expo-server-sdk')

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
    const {name, location, description, working_hours, phone_number, geoLocation} = req.body;
    try{
        const user = await Seller.findByIdAndUpdate(id,{
            name,
            geo_location:geoLocation,
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
//function to get client by id
const getClient = async (req, res) =>{
    const {_id} = req.params;
    const client = await Client.findOne({_id});
    res.json({client});
}

//function to send notification
const sendNotification = async (req,res)=>{
    //creating expo client
    let expo = new Expo();
    const id = req.user.id;
    const {notification} = req.body;
    const today = new Date();
    const dateTime = today.toUTCString();
    const Notification ={
        notification,
        date: dateTime
    }
    const serviceNotification = {
        service_id: id,
        notification,
        date: dateTime
    }
    let messages =[]
    const followers = await Seller.findById(id).select('followers').populate('followers.follower_id');
    const name = await Seller.findById(id).select('name');
    //getting followers device token
    followers?.followers?.forEach(element => {
        Client.findById(element.follower_id._id, (error, result)=>{
                result.notifications.push(serviceNotification);
                result.save();  
        })
        messages.push({
            to: element.follower_id.deviceToken,
            sound: 'default',
            body: notification,
            title: name.name
          })
        
    });
    let chunks = expo.chunkPushNotifications(messages);
    let tickets = [];
    (async () => {

    for (let chunk of chunks) {
        try {
        let ticketChunk = await expo.sendPushNotificationsAsync(chunk);
        tickets.push(...ticketChunk);
      
    } catch (error) {
      console.error(error);
    }
  }
})();
    Seller.findById(id, (error, result)=>{
        try {
            result.notifications.push(Notification);
            result.save();
            res.json(result);
        } catch (error) {
            res.status(400).send(error.message);
        } 
    })

}
//function to get Notifications
const getNotifications = async (req, res)=>{
    const id = req.user.id;
    const notifications = await Seller.findById(id).select('notifications');
    if(!notifications) return res.status(404).json({message:"No Notifications Found"})
    res.json({
        notifications
    })
}
    module.exports = {
    updateprofilepic,
    editProfile,
    addPicture,
    getPictures,
    deletePicture,
    getFollowers,
    getClient,
    sendNotification,
    getNotifications
}
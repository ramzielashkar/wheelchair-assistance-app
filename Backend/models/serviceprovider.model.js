const { default: mongoose } = require('mongoose');
const {User, userSchema} = require('./user.model');
const Client = require('./client.model');
const { schema } = require('./user.model');


const Seller = User.discriminator('Seller', new mongoose.Schema({
    profile_picture: {
        type: String,
        default:'default.png'
    },
    location:{
        type: String,
    },
    followers:[
        {
            follower_id : {
                type: mongoose.Schema.Types.ObjectId,
                ref:'Client'
            }
        }
    ],
    active:{
        type: Boolean,
    },
    description:{
        type:String,
    },
    working_hours:{
        type:String,
    },
    phone_number:{
        type : Number,
    },
    pictures:[
        {
            picture:{
                type:String,
            }
        }
    ],
    type:{
        type:String,
    },
    geo_location:{
        type : {type : String},
        coordinates : [],
    }

}),
);



module.exports= Seller
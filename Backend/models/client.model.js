const { default: mongoose } = require('mongoose');
const {User, userSchema} = require('./user.model');
const Seller = require('./serviceprovider.model');
const { schema } = require('./user.model');

const Client = User.discriminator('Client', new mongoose.Schema({
    profile_picture: {
        type: String,
        default: 'default.png'
    },
    location:{
        type: String,
    },
    following:[
        {
            following_id : {
                type: mongoose.Schema.Types.ObjectId,
                ref:'Seller'
            }
        }
    ],
    active:{
        type: Boolean,
        default:true
    },
    geo_location:{
        type : {type : String},
        coordinates : [],
        
    }
    
}),
);

module.exports = Client
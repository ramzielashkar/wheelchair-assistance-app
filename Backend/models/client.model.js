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
        default:""
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
    deviceToken:{
    },
    notifications:[{
            service_id: {
                type: mongoose.Schema.Types.ObjectId,
                ref:'Seller'
            },
            notification: {
                type: String
            },
            date:{
                type:String
            }
            
        
    }]
    
}),
);

module.exports = Client
const {User} = require('./user.model');
const { mongoose } = require('mongoose');


const Admin = User.discriminator('Admin', new mongoose.Schema({

}),
);


module.exports = Admin;
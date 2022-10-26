const mongoose = require('mongoose');

const baseOptions = {
    discriminatorKey: 'usertype', // our discriminator key, could be anything
    collection: 'users', // the name of our collection
  };
// Creating User Schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'name is required',
        unique: true
    },
    email: {
        type: String,
        required: 'email is required',
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: 'password is required',
        select: false
    },

}, baseOptions,)

const User = mongoose.model('User', userSchema);

module.exports = {User,
userSchema};
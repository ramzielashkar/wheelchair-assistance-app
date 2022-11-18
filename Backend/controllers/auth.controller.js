const { User } = require("../models/user.model");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');



//function to login
const login = async (req, res)=>{
    const {email, password} = req.body;
    const user = await User.findOne({email}).select("+password");

    if(!user) return res.status(404).json({message: "Invalid Credentials"});
    if(user.active==false) return res.status(404).json({message:"User Banned"})
    
    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch) return res.status(404).json({message: "Invalid Credentials"});
    const token = jwt.sign({email: user.email, name: user.name}, process.env.JWT_SECRET_KEY, {
        expiresIn: '1h'
    });
    res.status(200).json({
        'user': user, 
        'token':token
    })
}

module.exports = login;
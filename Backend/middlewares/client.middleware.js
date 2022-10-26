const jwt = require('jsonwebtoken');
const Client = require('../models/client.model');

// Authentication middleware
const clientMiddleware = async (req, res, next) => {
    let token = req.headers.authorization;
    if(!token) return res.status(401).json({message: "Unauthorized"})
    token = token.split(" ")[1];
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        const user = await Client.findOne({email: decoded.email}).lean();
        if(user.usertype != 'Client') return res.status(401).json({message: "Unauthorized"});
        req.user = {...user, id: user._id};
        next()

    }catch(err){
        return res.status(401).json({message: "Unauthorized"})
    }

}

module.exports = clientMiddleware;


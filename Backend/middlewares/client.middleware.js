const jwt = require('jsonwebtoken');
const Client = require('../models/users.model');

// Authentication middleware
const clientMiddleware = async (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1];
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        const user = await Client.findOne({email: decoded.email}).lean();
        if(user.usertype != 'Client') return res.status(401).json({message: "Unauthorized"});
        next()

    }catch(err){
        return res.status(401).json({message: "Unauthorized"})
    }

}

module.exports = clientMiddleware;


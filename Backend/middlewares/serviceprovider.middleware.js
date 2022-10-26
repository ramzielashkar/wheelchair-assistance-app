const jwt = require('jsonwebtoken');
const Seller = require('../models/serviceprovider.model');

// Authentication middleware
const serviceProviderMiddleware = async (req, res, next) => {
    let token = req.headers.authorization;
    if(!token) return res.status(401).json({message: "Unauthorized"})
    token = token.split(" ")[1];
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        const user = await Seller.findOne({email: decoded.email}).lean();
        if(user.usertype != 'Seller') return res.status(401).json({message: "Unauthorized"});
        req.user = {...user, id: user._id};
        next()

    }catch(err){
        return res.status(401).json({message: "Unauthorized"})
    }

}

module.exports = serviceProviderMiddleware;


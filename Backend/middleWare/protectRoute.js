import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';

const protectRoute = async (req, res, next) => {
    try
    {
        const token = req.cookies.jwt;
        console.log(JSON.stringify(req.cookies), "req.cookies")
        if(!token)
        {
            return res.status(401).json({message: "User not authenticated"});
            //error 401 is used to tell that it is an unauthorized access
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log(decoded, "decoded")
        if(!decoded)
        {
            return res.status(401).json({message: "User not authenticated"});
        }
        const user = await User.findById(decoded.UserID).select("-password");

        if(!user)
        {
            return res.status(404).json({message: "User not found"});
        }
        req.user = user;
        next();
    }
    catch(error)
    {
        console.log("Error in protectRoute middleware: ", error.message);
        return res.status(500).json({message: error.message})
    }
};

export default protectRoute;
import jwt from 'jsonwebtoken';

const generateToken = (UserID, res) => {
    const token = jwt.sign({ UserID }, process.env.JWT_SECRET, {
         expiresIn: "15d" 
        });


        res.cookie("jwt", token, {
            maxAge: 15 * 24 * 60 * 60 * 1000, // 15 day converted to milliseconds
            httpOnly: true,   // prevent XSS - cross site scripting attack
            sameSite : "strict",  //  CSRF - Cross Site Request Forgery
            secure : process.env.NODE_ENV !== "development", // cookie works only in https
        });
}

export default generateToken;